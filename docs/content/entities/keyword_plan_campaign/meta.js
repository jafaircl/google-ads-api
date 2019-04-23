module.exports = {
    name: 'KeywordPlanCampaign',
    object: {
        keyword_plan_network: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                { s: 'GOOGLE_SEARCH', description: 'Google Search.' },
                { s: 'GOOGLE_SEARCH_AND_PARTNERS', description: 'Google Search + Search partners.' },
            ],
            _description:
                'Targeting network.\n\nThis field is required and should not be empty when creating Keyword Plan\ncampaigns.',
        },
        cpc_bid_micros: {
            _type: 'int64',
            _description:
                'A default max cpc bid in micros, and in the account currency, for all ad\ngroups under the campaign.\n\nThis field is required and should not be empty when creating Keyword Plan\ncampaigns.',
        },
        name: {
            _type: 'string',
            _description:
                'The name of the Keyword Plan campaign.\n\nThis field is required and should not be empty when creating Keyword Plan\ncampaigns.',
        },
        language_constants: {
            _type: 'array',
            _description: 'The languages targeted for the Keyword Plan campaign.\nMax allowed: 1.',
        },
        id: { _type: 'int64', _description: 'The ID of the Keyword Plan campaign.' },
        geo_targets: { _type: 'array', _description: 'The geo targets.\nMax number allowed: 20.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the Keyword Plan campaign.\nKeywordPlanCampaign resource names have the form:\n\n`customers/{customer_id}/keywordPlanCampaigns/{kp_campaign_id}`',
        },
        keyword_plan: { _type: 'string', _description: 'The keyword plan this campaign belongs to.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
