import React, { FC } from 'react';
import { connect } from 'react-redux';

type PropsType = {
    state: string
}

const MainPage: FC<any>= (props: PropsType) => (
        <div>{props.state}</div>
    );


function mapStateToProps(state: any) {
    return {
        state: state.reducer1.state
    };
}

export default connect(mapStateToProps, null)(MainPage);
