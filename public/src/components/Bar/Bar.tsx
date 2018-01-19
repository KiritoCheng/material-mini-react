import * as React from 'react';

import './bar.less'

interface bar {
    menu?: boolean
}

function offset(target) {
    var top = 0,
        left = 0

    while (target.offsetParent) {
        top += target.offsetTop
        left += target.offsetLeft
        target = target.offsetParent
    }

    return {
        top: top,
        left: left,
    }
}

export class Bar extends React.Component<bar, any>{
    private buttonElement: any

    handleTap(e, el = this.buttonElement) {
        var ripple = document.createElement('div');
        ripple.className = 'waves-ripple';
        el.appendChild(ripple);

        // Get click coordinate and element witdh
        var pos = offset(el);
        var relativeY = e.pageY - pos.top;
        var relativeX = e.pageX - pos.left;
        var scale = 'scale(' + el.clientWidth / 100 * 10 + ')';

        // Support for touch devices
        if ('touches' in e) {
            relativeY = e.touches[0].pageY - pos.top;
            relativeX = e.touches[0].pageX - pos.left;
        }

        // Set ripple position
        var rippleStyle = `top:${relativeY}px; left:${relativeX}px`

        ripple.setAttribute('style', rippleStyle);

    }

    render() {
        return (
            <header className={`bar bar_boxShadow bar_position bar_color`}>
                <div className={`bar_container`}>
                    {
                        this.props.menu &&
                        <button className={`bar_menu bar_menu_margin bar_menu_color`}
                            onClick={(e: any) => { this.handleTap(e) }}
                            ref={ref => { this.buttonElement = ref }}>
                            <span className={`bar_menu_span`}>
                                <svg viewBox='0 0 24 24'
                                    style={{ width: '1em', height: '1em' }}
                                    className='bar_menu_icon'>
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                </svg>
                            </span>
                        </button>
                    }

                    <h2 style={{
                        margin: 0,
                        display: 'block',
                        color: 'inherit',
                        flex: 1
                    }}>
                        Title
                    </h2>

                    {
                        this.props.children
                    }
                </div>
            </header>
        )
    }
}