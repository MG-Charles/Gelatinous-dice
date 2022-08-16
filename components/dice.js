import React from "react";
import styles from "../styles/components/dice.module.scss";

class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            numberRolled: 0,
        };
    
        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel.
        this.roll = this.roll.bind(this);
    }

    roll(){        
        let number = Math.floor(Math.random() * 20) + 1;        
        this.setState(state => ({
            numberRolled: number
        }));
      
    }

    render(){
        return (
            <div className={styles.dice} onClick={this.roll}>
                <div className={styles.content}>
                    <h3 className={styles.text}>Click to roll me</h3>
                    <div className={styles.number}>{this.state.numberRolled}</div>
                </div>
            </div>
        );
    }
}

export default Dice;