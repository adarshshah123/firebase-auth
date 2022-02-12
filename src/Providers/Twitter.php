<?php

/*
 * This file is part of fof/oauth.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Adarsh\Firebase\Providers;

use Adarsh\Firebase\Provider;

class Twitter extends Provider
{
    public function name(): string
    {
        return 'twitter';
    }

    public function link(): string
    {
        return 'https://developer.twitter.com/en/apps';
    }

    public function fields(): array
    {
        return [
            'api_key'    => 'required',
            'api_secret' => 'required',
        ];
    }
}
