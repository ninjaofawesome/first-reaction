var TitleHeadline = React.createClass({
  render: function() {
    return (
      <h1 className="title">
        Hannah Is Awesome!
      </h1>
    );
  }
});

var BodyType = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        <p>Lollipop gummies carrot cake jelly beans danish I love fruitcake donut. Cupcake liquorice bonbon danish cookie pie bonbon cheesecake dragée. Brownie I love gingerbread sugar plum lemon drops pastry caramels. Powder chocolate bar sweet dragée. Sugar plum I love halvah wafer cupcake jelly. Candy muffin marzipan carrot cake I love sugar plum apple pie cupcake. Dragée pie soufflé brownie jujubes. Sweet roll donut tootsie roll gummies donut pastry. Sesame snaps fruitcake cake jelly muffin caramels croissant sweet roll jelly.</p>

        <p>Lollipop <a href="#">gummies carrot cake</a> jelly beans danish I love fruitcake donut. Cupcake liquorice bonbon danish cookie pie bonbon cheesecake dragée. Brownie I love gingerbread sugar plum lemon drops pastry caramels. Powder chocolate bar sweet dragée. Sugar plum I love halvah wafer cupcake jelly. Candy muffin marzipan carrot cake I love sugar plum apple pie cupcake. Dragée pie soufflé brownie jujubes. Sweet roll donut tootsie roll gummies donut pastry. Sesame snaps fruitcake cake jelly muffin caramels croissant sweet roll jelly.</p>
      </div>
    );
  }
});


var IndexComponents = React.createClass({
  render: function(){
    return (
        <div className="indexComponents">
          <TitleHeadline />
          <BodyType />
        </div>
    );
  }
});

ReactDOM.render(
  <IndexComponents />,
  document.getElementById('index')
);