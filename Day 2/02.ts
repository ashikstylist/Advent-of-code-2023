const withdraws: string = ``; // Input


const games : string[] = withdraws.split("\n");
let dataset: {
            [key : string] : number
        }[][]  = [];

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
    let max_of_color = {
        red: 0,
        blue: 0,
        green: 0
    }
    per_game.map(data => {
        "blue" in data && data["blue"] > max_of_color["blue"] && (max_of_color["blue"] = data["blue"]);
        "green" in data && data["green"] > max_of_color["green"] && (max_of_color["green"] = data["green"]);
        "red" in data && data["red"] > max_of_color["red"] && (max_of_color["red"] = data["red"]);
    })

    const multiply_cubes = max_of_color["blue"] * max_of_color["red"] * max_of_color["green"];
    count += multiply_cubes;
})


console.log(count)



