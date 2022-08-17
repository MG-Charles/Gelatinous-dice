import React from "react";
import styles from "../styles/components/dice.module.scss";

class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberRolled: 0,
            numberArray: Array.from({ length: this.props.max }, (_, i) => i + 1),
            isRolling: false,
        };

        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel.
        this.roll = this.roll.bind(this);
    }

    roll() {
        let number = Math.floor(Math.random() * this.props.max) + 1;

        this.setState(state => ({
            numberRolled: 0,
            isRolling: true,
        }));

        setTimeout(() => {
            this.setState(state => ({
                numberRolled: number,
                isRolling: false,
            }));
        }, this.props.max * 300 + 300);
    }

    render() {
        return (
            <div className={styles.dice} onClick={this.roll}>
                <div className={styles.content}>
                    <h3 className={styles.text}>Click to roll this d{this.props.max}</h3>
                    {/* <div className={styles.number}>{this.state.numberRolled}</div> */}
                    <div className={`${styles.numberContainer} ${(this.state.isRolling ? styles.rolling : '')}`}>
                        {this.state.numberArray.map((x, i) =>
                            <p key={i + 1} className={`${styles.number} ${(this.state.numberRolled == i + 1 ? styles.active : '')}`}>{i + 1}</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dice;