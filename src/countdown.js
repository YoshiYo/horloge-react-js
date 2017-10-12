class Countdown extends React.Component {

  constructor(){
    super();
    // L'état du composant qu'on va manipuler au cours du temps
    this.state = {
      // Ce qui est ecrit dans le textarea
      text: "Mon text de départ",
      isPhotoAdded: false,
    }
  }


    render() {
      console.log("Countdown");

      return(
        <div>
          Toto
        </div>
      );

    }
}

ReactDOM.render(
  <Countdown/>,
  document.getElementById('test2')
);
