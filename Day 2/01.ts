const withdraws: string = ``; // Input


const games : string[] = withdraws.split("\n");
let dataset: {
            [key : string] : number
        }[][]  = [];

const max_out_values = {
    "red": 12,
    "green": 13,
    "blue": 14
}

let count: number = 0;

// Basic Secreation
games.map(game => {
    const game_id: number = parseInt(game.split(":")[0].split(" ")[1]);
    const random_withdrawn = game.split(":")[1];
    const per_withdraw = random_withdrawn.split(';');
    let arr_grouping : {
            [key : string] : number
        }[] = [];
    per_withdraw.map(withdraw => {
        const each_chance = withdraw.split(",");
        let filtered_by_color: {
            [key : string] : number
        } = {};
        each_chance.map(filt => {
            filtered_by_color[filt.trim().split(" ")[1]] = parseInt(filt.trim().split(" ")[0])
        });
        arr_grouping.push(filtered_by_color)
    })
    dataset.push(arr_grouping);
})

dataset.map((per_game, index) => {
    let check_configuration = false;
    per_game.map(per_draw => {
        Object.entries(per_draw).map(([key, value]) => {
            if(!check_configuration && (value > max_out_values[key]) ) {
                check_configuration = true;
            }
        })

    })
    const game_id = index+1;
    if(!check_configuration) { 
        count += game_id;
         }
})

console.log(count)
