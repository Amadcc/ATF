import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {UsersList} from './UsersList';

const ClientID = 'cSINit6w_4pDBfqn9ongusWMzIid5yKkU-TkQ5imrY4';
const api = `https://api.unsplash.com/photos/?client_id=${ClientID}&page=`;

export default class User extends Component {
  state = {
    getData: [],
    isLoading: false,
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
          getData: this.state.getData.concat(res),
          isRefreshing: false,
        });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        isRefreshing: true,
        page: this.state.page + 1,
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
    this.setState(
      {isRefreshing: true, page: this.state.page + 1},
      this.fetchData(),
    );
  };

  renderRow = ({item}) => {
    return <UsersList text={item.user.name} img={item.urls.small} />;
  };

  render() {
    const {getData, isRefreshing} = this.state;
    return (
      <FlatList
        data={getData}
        renderItem={this.renderRow}
        refreshing={isRefreshing}
        onRefresh={this.handleRefresh}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0}
      />
    );
  }
}
