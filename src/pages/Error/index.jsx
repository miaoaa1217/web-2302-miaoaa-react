import React, {Component} from 'react';
import {Empty} from 'antd';

class Album extends Component {
    render() {
        return (
            <div>
                <Empty description="页面不存在！" style={{marginTop: "40vh"}}/>
            </div>
        );
    }
}

export default Album;