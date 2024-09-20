



function check_if_hit(board, posn) {
    var def = get_defender(board, posn); // defender
    var sup = get_defender_support(board, posn); // defender support
    
    if (get_card(def) != "") return false;
    if (get_card(sup) == "2♣️") return false;


    return true;
}



function get_posn_damage(board, posn){
    var atk = get_attacker(board, posn); // attacker
    if (atk === "") return 0;

    var damage = 0;

    if (check_if_hit(board, posn)) {
        damage = get_attack(atk);
        damage += parse_attacker_bonus(board, posn)
    }

    damage += parse_support_damage(board, posn);

    return damage;

}


function parse_attacker_bonus(board, posn) {
    var def = get_defender(board, posn); // defender
    var atk = get_attacker(board, posn); // attacker

    switch (get_card(atk)) {
        //SPADES (MELANCHOLIC)
        
        case ("K♠️"):
            if (check_if_hit(board, posn)) {
                return get_attack(atk);
            }
            return 0;

            break;
        case ("Q♠️"):
            if (get_cost(def) > get_cost(atk)) {
                return get_bolstering(atk);
            }
            return 0;

            break;
        case ("10♠️"):
            if (!check_if_hit(board, posn)) {
                return get_attack(atk);
            }
            return 0;

            break;

        // CLUBS (PHLEGMATIC)

        case ("A♣️"):
            if (check_if_hit(board, posn)) {
                return get_attack(atk);
            } else {
                if (get_cost(atk) > get_cost(def)) {
                    return get_attack(atk);
                }
            }
            return 0;

            break;

        // DIAMONDS (CHOLERIC)
        case ("9♦️"):
            if (check_if_hit(board, posn)) {
                if (get_card(get_defender_support(board, posn)) == "") {
                    return get_attack(atk); // attacks both spots if available
                } else {
                    return -get_attack(atk); // if support occupied only attacks it
                }
            }
            return 0;

            break;

        default:
            return 0;
    }

}


function parse_support_damage(board, posn) {
    var def = get_defender(board, posn); // defender
    var atk = get_attacker(board, posn); // attacker
    var sup = get_support(board, posn); // attacker

    switch (get_card(sup)) {
        //SPADES (MELANCHOLIC)
        case ("9♠️"):
            if (check_if_hit(board, posn)) {
                return get_attack(atk);
            }
            return 0;

            break;

        case ("8♠️"):
            if (check_if_hit(board, posn)) {
                return get_bolstering(atk);
            }
            return 0;

            break;

        case ("5♠️"):
            if (check_if_hit(board, posn)) {
                var extra = 1;
                for (let i = 1; i < 4; i++) {
                    if (get_card(get_attacker(board, (posn + i) % 4)) != "") {
                        extra++;
                    }

                }
                return extra;
            }
            return 0;

            break;

        // CLUBS (PHLEGMATIC)

        case ("A♣️"):

            return 0;

            break;

        // DIAMONDS (CHOLERIC)
        case ("9♦️"):
            if (check_if_hit(board, posn)) {
                if (get_card(get_defender_support(board, posn)) == "") {
                    return get_attack(atk); // attacks both spots if available
                } else {
                    return -get_attack(atk); // if support occupied only attacks it
                }
            }
            return 0;

            break;

        case ("4♦️"):
            if (check_if_hit(board, posn)) {
                if (get_card(get_defender_support(board, posn)) == "") {
                    return 0; // no extra damage, already dealt some
                } else {
                    return -get_attack(atk); // if support occupied only attacks it
                }
            } else {
                if (get_card(get_defender_support(board, posn)) == "") {
                    return get_attack(atk); // front occupied, but still hit
                } else {
                    return 0; // both spots occupied, blocked
                }

            }
            return 0;

            break;

        default:
            return 0;
    }

}


function get_total_damage(board) {

    var damage = get_posn_damage(board, 0);
    damage += get_posn_damage(board, 1);
    damage += get_posn_damage(board, 2);
    damage += get_posn_damage(board, 3);

    return damage;

}






function test_get_attack(){

    get_posn_damage(test_board, 0)
    get_posn_damage(test_board, 1)
    get_posn_damage(test_board, 2)
    get_posn_damage(test_board, 3)
    
    return get_total_damage(test_board);

}
