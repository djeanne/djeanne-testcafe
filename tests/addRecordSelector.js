import {Selector} from 'testcafe';

const nameField = Selector("#name");
const phoneField = Selector("#phone");
const emailField = Selector("#email");
const submitButton = Selector("#submit");


fixture("Phone book record")
    .page("https://djeanne.github.io/dovidnyk/add/");

test("Add a new record", async t => {
    await t
        .typeText(nameField, "Mike Wazowski")
        .typeText(phoneField, "2319")
        .typeText(emailField, "wazowski@monsters.inc")
        .click(submitButton);      
});