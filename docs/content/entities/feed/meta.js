module.exports = {
    name: 'Feed',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the feed.\nFeed resource names have the form:\n\n`customers/{customer_id}/feeds/{feed_id}`',
        },
        attribute_operations: {
            _type: 'array',
            _description:
                'The list of operations changing the feed attributes. Attributes can only\nbe added, not removed.',
        },
        affiliate_location_feed_data: {
            relationship_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'GENERAL_RETAILER', description: 'General retailer relationship.' },
                ],
                _description: 'The relationship the chains have with the advertiser.',
            },
            chain_ids: {
                _type: 'array',
                _description: 'The list of chains that the affiliate location feed will sync the\nlocations from.',
            },
            _oneof: 'systemFeedGenerationData',
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Feed is enabled.' },
                { s: 'REMOVED', description: 'Feed has been removed.' },
            ],
            _description: 'Status of the feed.\nThis field is read-only.',
        },
        places_location_feed_data: {
            label_filters: {
                _type: 'array',
                _description:
                    'Used to filter Google My Business listings by labels. If entries exist in\nlabel_filters, only listings that has any of the labels set are\ncandidates to be synchronized into FeedItems. If no entries exist in\nlabel_filters, then all listings are candidates for syncing.',
            },
            business_account_id: {
                _type: 'string',
                _description:
                    'Plus page ID of the managed business whose locations should be used. If\nthis field is not set, then all businesses accessible by the user\n(specified by email_address) are used.\nThis field is mutate-only and is not selectable.',
            },
            oauth_info: {
                http_method: { _type: 'string', _description: 'The HTTP method used to obtain authorization.' },
                http_request_url: {
                    _type: 'string',
                    _description: 'The HTTP request URL used to obtain authorization.',
                },
                http_authorization_header: {
                    _type: 'string',
                    _description: 'The HTTP authorization header used to obtain authorization.',
                },
            },
            category_filters: {
                _type: 'array',
                _description:
                    "Used to filter Google My Business listings by categories. If entries\nexist in category_filters, only listings that belong to any of the\ncategories are candidates to be sync'd into FeedItems. If no entries\nexist in category_filters, then all listings are candidates for syncing.",
            },
            email_address: {
                _type: 'string',
                _description:
                    'Email address of a Google My Business account or email address of a\nmanager of the Google My Business account. Required.',
            },
            business_name_filter: {
                _type: 'string',
                _description:
                    "Used to filter Google My Business listings by business name. If\nbusiness_name_filter is set, only listings with a matching business name\nare candidates to be sync'd into FeedItems.",
            },
            _oneof: 'systemFeedGenerationData',
        },
        name: { _type: 'string', _description: 'Name of the feed. Required.' },
        origin: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'USER',
                    description:
                        'The FeedAttributes for this Feed are managed by the\nuser. Users can add FeedAttributes to this Feed.',
                },
                {
                    s: 'GOOGLE',
                    description:
                        'The FeedAttributes for an GOOGLE Feed are created by Google. A feed of\nthis type is maintained by Google and will have the correct attributes\nfor the placeholder type of the feed.',
                },
            ],
            _description: 'Specifies who manages the FeedAttributes for the Feed.',
        },
        attributes: {
            _type: 'array',
            _description:
                "The Feed's attributes. Required on CREATE.\nDisallowed on UPDATE. Use attribute_operations to add new attributes.",
        },
        id: { _type: 'int64', _description: 'The ID of the feed.\nThis field is read-only.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
