
export class PasswordStengthMeter {
    container: any;
    options: any;
    formGroup: any;
    constructor(targetContainer: any) {
        this.container = targetContainer
        if (this.container.find(".progress").length !== 0) return;
  
        this.formGroup = this.container.closest(".form-group");
        this.options = {
            common: {},
            rules: {},
            ui: {
                container: this.formGroup,
                showVerdictsInsideProgressBar: true,
                showStatus: true,
                showPopover: false,
                showErrors: false,
                viewports: {
                    progress: this.container
                },
                verdicts: [
                    "<span class='fa fa-exclamation-triangle'></span> Weak",
                    "<span class='fa fa-exclamation-triangle'></span> Normal",
                    "Medium",
                    "<span class='fa fa-thumbs-up'></span> Strong",
                    "<span class='fa fa-thumbs-up'></span> Very Strong"],
            }

        };
    }

    public enable() {
        // for configuration options : https://github.com/ablanco/jquery.pwstrength.bootstrap/blob/master/OPTIONS.md

        var password = this.formGroup.find(":password");
        if (password.length == 0) {
            console.log('Error: no password field found for password strength.');
            console.log(this.container);
        }
        else password.pwstrength(this.options);

 
    }
}
