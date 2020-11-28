module.export = {
    'First test case'(browser) {
        brower
            .url('mcgill.ca')
            .waitForElementVisible('.js-site-name')
            .asset.containsTest(".js-site-name", "mcgill")
    }
}