console.log( "=== simpread option dialog ===" )

const optbgcls = "ks-simpread-option-bg",
      optbg    = '<div class="' + optbgcls + '"></div>';

/**
 * Dialog Rect component
 */
export default class Dialog extends React.Component {

    // close dialog
    close() {
        $( "." + optbgcls ).addClass( "ks-simpread-option-bg-hide" );
        $( "." + optbgcls ).one( "animationend", () => $( "." + optbgcls ).remove() );
    }

    // save dialog focus option
    save() {
        console.log( "dialog click submit button." )
    }

    render() {
        return (
            <div className="ks-simpread-option-dialog">
                <div className="ks-simpread-option-content">
                    Hello React world!
                </div>
                <div className="ks-simpread-option-footer">
                    <a 
                        href="javascript:void(0);"
                        className="ks-simpread-option-btn ks-simpread-option-submit"
                        onClick={ () => this.save() }>
                        确认
                    </a>
                    <a 
                        href="javascript:void(0);"
                        className="ks-simpread-option-btn ks-simpread-option-cancel"
                        onClick={ () => this.close() }>
                        取消
                    </a>
                </div>
            </div>
        )
    }
}

/**
 * get Dialog background document
 */
export function getDialogBackground() {
    $( "body" ).append( optbg );
    return $( "." + optbgcls )[0];
}
