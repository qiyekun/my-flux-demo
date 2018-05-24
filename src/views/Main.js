var React = require('react');

export default class MainView extends React.Component {

  render() {

    const { itemState, addItem, minusItem  } = this.props;

    var itemHtml = itemState.get('itemList') && itemState.get('itemList').map(function (listItem, i) {
      return <li key={i}>{listItem}</li>;
    });
    return (<div>
      <ul>{itemHtml}</ul>
      <button onClick={()=>addItem('add')}>add</button>
      <button onClick={()=>minusItem('minus')}>minus</button>
    </div>
  )}
}