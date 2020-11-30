fixture("Phone book record")
    .page("https://djeanne.github.io/dovidnyk/add/");

test("Add a new record", async t => {
    await t
        .typeText("#name", "Mike Wazowski")
        .typeText("#phone", "2319")
        .typeText("#email", "wazowski@monsters.inc")
        .click("#submit");      
});