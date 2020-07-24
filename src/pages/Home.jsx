import React from 'react';
import { Aside, ContentPage, Hero } from '../components';
import { connect } from 'react-redux';
import { setTires } from '../redux/actions/tires';

// Главная страница

class Home extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/tireDataBase.json').then((response) =>
      response.json().then((data) => this.props.setTires(data.tires))
    );
  }

  render() {
    return (
      <div>
        <Hero />
        <Aside />
        <ContentPage
          sortItems={[
            { name: 'по умолчанию', type: 'popular' },
            { name: 'возрастанию цены', type: 'priceTop' },
            { name: 'убыванию цены', type: 'priceDown' },
          ]}
          items={this.props.items}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.tires.items,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    setTires: (items) => dispatch(setTires(items)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Home);
