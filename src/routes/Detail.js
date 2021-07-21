import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const {
      props: {
        location: { state },
        history,
      },
    } = this;
    if (state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;
    console.log(state);
    if (state) {
      return <span>{state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
