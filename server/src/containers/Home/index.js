import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header.js';
import { getHomeList } from './store/actions';

class Home extends Component {
    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getHomeList();
        }
    }

    getList() {
        const { home } = this.props;
        const { name, newsList } = home;

        return newsList && newsList.map(item => {
            return <div key={item.id}>hello</div>
        });
    }

    render() {
        const { home } = this.props;
        const { name, newsList } = home;

        console.log('init1', home);
        return (
            <div>
                <Header />
                <div>This is {name}</div>
                <button onClick={() => { alert('click') }}>click</button>

                {this.getList()}
            </div>
        );
    }
}

Home.loadData = (store) => {
    // 这个函数，负责在服务器渲染之前，把这个路由需要的数据提前加载好

    return store.dispatch(getHomeList());
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps1', state);
    return {
        home: state.home
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        getHomeList() {
            dispatch(getHomeList());
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);