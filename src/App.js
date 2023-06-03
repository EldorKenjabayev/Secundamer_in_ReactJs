import React, { Component } from 'react';
import '../src/index.css';

export default class App extends Component {
  state = {
    soat: 0,
    minut: 0,
    second: 0,
    inter: null,
    interval: []
  };

  startBtn = () => {
    let { soat, minut, second, inter } = this.state;

    inter = setInterval(() => {
      if (second === 59) {
        minut++;
        second = 0;

        if (minut === 60) {
          soat++;
          minut = 0;
          second = 0;
        } else {
          second++;
        }
      } else {
        second++;
      }

      this.setState({
        second,
        minut,
        soat,
        inter,
      });
    }, 1000);
  };

  stop = () => {
    let { inter } = this.state;

    clearInterval(inter);

    this.setState({
      inter,
    });
  };

  restart = () => {
    let { soat, minut, second, interval, inter } = this.state;
    soat = 0;
    minut = 0;
    second = 0;
    interval=[];
    clearInterval(inter);
    this.setState({
      soat,
      minut,
      second,
      interval,
      inter
    });
  };

  interval = () => {
    let { soat, minut, second, interval } = this.state;
    let interval2 = `${soat}:${minut}:${second}`;
    interval.push(interval2)
    this.setState({
      interval,
      soat,
      minut,
      second
    });
    console.log(interval);

  };

  render() {
    const { soat, minut, second } = this.state;

    return (
      <div className="container" style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'20vh' }}>
        <div className="timerHead" style={{ width: '50%', height: '50%', border: '1px solid #000' }}>
          <div
            className="timer"
            style={{ width: '50%', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2vw', fontSize: '25px', marginTop: '5vh', background:'#EDFFCD', borderRadius:'15px'  }}
          >
            <h2>{soat}</h2>
            <span>:</span>
            <h2>{minut}</h2>
            <span>:</span>
            <h2>{second}</h2>
          </div>
          <div className="timer_btn" style={{ width: '70%', display: 'flex', justifyContent: 'space-evenly', margin: 'auto', paddingTop: '7vh', paddingBottom:'2vh' }}>
            <button onClick={this.startBtn}>start</button>
            <button onClick={this.stop}>stop</button>
            <button onClick={this.restart}>restart</button>
            <button onClick={this.interval}>interval</button>
          </div>
          <div >
          {
            this.state.interval.map((item, index) => (
              <div key={index}
              style={{
                width:'5%',
                margin:'auto',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
                
              }}>
                <h3>{item}</h3>
              </div>
            ))
          }
          </div>


        </div>
      </div>
    );
  }
}
