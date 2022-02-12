<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Adarsh\Firebase\Controllers;

use Flarum\Api\Client;
use Flarum\Http\RememberAccessToken;
use Flarum\Http\Rememberer;
use Flarum\Http\SessionAuthenticator;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\LoginProvider;
use Flarum\User\User;
use Flarum\User\RegistrationToken;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\HtmlResponse;
use Laminas\Diactoros\Response\JsonResponse;

class FirebaseOauthController implements RequestHandlerInterface
{
    /**
     * @var Client
     */
    protected $api;

    /**
     * @var SessionAuthenticator
     */
    protected $authenticator;

    /**
     * @var Rememberer
     */
    protected $rememberer;
    protected $url;

    /**
     * @param Client $api
     * @param SessionAuthenticator $authenticator
     * @param Rememberer $rememberer
     */
    public function __construct(Rememberer $rememberer)
    {
        $this->rememberer = $rememberer;
    }

   

    /**
     * {@inheritdoc}
     */
    public function handle(Request $request): ResponseInterface
    {
        $data = $request->getParsedBody();
       // print_r($data[0]);
        $provider = explode('.', $data[0]['providerId'])[0];
        $identifier = $data[0]['uid'];

        if ($user = LoginProvider::logIn($provider, $identifier)) {
            return $this->makeLoggedInResponse($user);
        }

        // $configureRegistration($registration = new Registration);

        $provided = array();
        $provided = [
            'email' => $data[0]['email'],
            'avatar_url' => $data[0]['photoURL'] ?? NULL,
        ];

        $payload = array();
        $payload = [
            'sub' => $data[0]['uid'],
            'name' => $data[0]['displayName'],
            'avatar_url' => $data[0]['photoURL'] ?? NULL,
            'email_verified' => TRUE,
        ];

        $getSuggested =  (array)str_replace(" ", '', $data[0]['displayName']);
        // echo "<pre>";
        
        if (!empty($data[0]['email']) && $user = User::where(Arr::only($data[0], 'email'))->first()) {
            $user->loginProviders()->create(compact('provider', 'identifier'));
            return $this->makeLoggedInResponse($user);
        }
        $token = RegistrationToken::generate($provider, $identifier, $provided, $payload);
        $token->save();
        // print_r(array_keys($provided)) and die;

        return $this->makeResponse(array_merge(
            $provided,
            $getSuggested,
            [
                'token' => $token->token,
                'provided' => array_keys($provided)
            ]
        ));
    }
    private function makeResponse(array $payload): JsonResponse
    {
        
        return new JsonResponse($payload);
    }

    private function makeLoggedInResponse(User $user)
    {
        $response = $this->makeResponse(['loggedIn' => true]);
        $token = RememberAccessToken::generate($user->id);

        return $this->rememberer->remember($response, $token);
    }

    
}