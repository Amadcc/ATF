import React, {Component} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {UsersList} from './UsersList';

const api = `http://5e6a26470f70dd001643baa0.mockapi.io/users/users?limit=10&page=`;

export default class User extends Component {
  state = {
    getData: [],
    isRefreshing: false,
    page: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const {page} = this.state;
    fetch(api + page)
      .then(res => res.json())
      .then(res => {
        this.setState({
          getData: [...this.state.getData, ...res],
          isRefreshing: false,
        });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        isRefreshing: true,
        page: 1,
      },
      () => {
        const {page} = this.state;
        fetch(api + page)
          .then(res => res.json())
          .then(res => {
            this.setState({
              getData: res,
              isRefreshing: false,
            });
          });
      },
    );
  };

  handleLoadMore = () => {
    this.setState({page: this.state.page + 1}, () => {
      this.fetchData();
    });
  };

  renderItem = ({item}) => {
    return (
      <UsersList text={item.name} img={item.avatar} status={item.status} />
    );
  };

  render() {
    const {getData, isRefreshing} = this.state;
    return (
      <FlatList
        data={getData}
        renderItem={this.renderItem}
        refreshing={isRefreshing}
        onRefresh={this.handleRefresh}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={() =>
          isRefreshing ? null : (
            <ActivityIndicator animating color="#bc2b78" size="large" />
          )
        }
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    );
  }
}
