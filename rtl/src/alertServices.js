import toastr from "toastr";
import "toastr/build/toastr.min.css"

export class Alert {
    static success = (props) => {
        toastr.remove();
        toastr.options = {positionClass: props.position ? props.position : "toast-top-full-width"};
        toastr.success(props.title.toUpperCase(), props.status);
    };

    static info = (props) => {
        toastr.remove();
        toastr.options = {positionClass: props.position ? props.position : "toast-top-full-width"};
        toastr.info(props.title.toUpperCase(), props.status);
    };

    static warning = (props) => {
        toastr.remove();
        toastr.options = {positionClass: props.position ? props.position : "toast-top-full-width"};
        toastr.warning(props.title.toUpperCase(), props.status);
    };

    static error = (props) => {
        toastr.remove();
        toastr.options = {positionClass: props.position ? props.position : "toast-top-full-width"};
        toastr.error(props.title.toUpperCase(), props.status);
    };

    static confirm = (props) => {
        const html = '<br />' +
            '<button type="button" class="btn btn-sm btn-dark" value="yes">Yes Do It!</button>';

        toastr.options = {positionClass: props.position ? props.position : "toast-top-full-width"};
        toastr.info(html, props && props.message ? props.message : 'Are you sure?', {
            allowHtml: true,
            onclick: (toast) => {
                if (toast.target.value === 'yes') props.action();
                toastr.remove();
            }
        })
    };

    static delete = (props) => {
        const html = '<br />' +
            '<button type="button" class="btn btn-sm btn-danger" value="yes">Yes Do It!</button>';

        toastr.options = {positionClass: props.position ? props.position : "toast-top-full-width"};
        toastr.warning(html, props && props.message ? props.message : 'This data won\'t be retrievable once deleted. Are you sure?', {
            allowHtml: true,
            onclick: (toast) => {
                if (toast.target.value === 'yes') {
                    props.action();
                    toastr.remove();
                }
            }
        })
    };
}