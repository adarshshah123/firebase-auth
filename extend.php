<?php

/*
 * This file is part of mohan/firebase.
 *
 * Copyright (c) 2022 Mohan Lal Sharma.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Adarsh\Firebase;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\Frontend\Document;
use Adarsh\Firebase\Controllers\FirebaseOauthController;
use Adarsh\Firebase\Extend\ExtensionSettings;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/resources/less/admin.less')
        ->content(function (Document $document) {
            $document->payload['fof-firebase'] = resolve('fof-firebase.providers.admin');
        }),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Routes('forum'))
        ->post('/firebase', 'firebase.auth', FirebaseOauthController::class),

    (new ExtensionSettings())
        ->addKey('fof-firebase.only_icons', false),

    (new Extend\ServiceProvider())
        ->register(OAuthServiceProvider::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(function (ForumSerializer $serializer) {
            $attributes = [];
            if ($serializer->getActor()->isGuest()) {
                $attributes['fof-firebase'] = resolve('fof-firebase.providers.forum');
            }
            return $attributes;
        }),
];
