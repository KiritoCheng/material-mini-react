import * as React from 'react';
import { Bar } from '../Bar/index';

export class BarExample extends React.Component<any, any>{
    render() {
        return (
            <div>
                <h2 className='example_title'>简单标题</h2>
                <Bar />


                <h2 className='example_title'>带有菜单按钮</h2>
                <Bar menu />
            </div>
        )
    }
}