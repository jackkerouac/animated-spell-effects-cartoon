Hooks.once('ready', () => {
    if (game.modules.get("sequencer")?.active) {
        const PATH = "modules/animated-spell-effects-cartoon/spell-effects/cartoon";
        const cartoonDatabase = {
            "air": {
                "blast": {
                    "circle": `${PATH}/air/air_blast_CIRCLE_01.webm`,
                    "cone": `${PATH}/air/air_blast_CONE_01.webm`,
                    "cone": `${PATH}/air/air_blast_CONE_02.webm`,
                    "cone": `${PATH}/air/air_blast_CONE_03.webm`,
                    "cone": `${PATH}/air/air_blast_CONE_04.webm`,
                    "cone": `${PATH}/air/air_blast_CONE_05.webm`,
                },
                "bolt": {
                    "ray": `${PATH}/air/air_bolt_RAY_01.webm`,
                    "square": `${PATH}/air/air_bolt_SQUARE_01.webm`,
                    "square": `${PATH}/air/air_bolt_SQUARE_02.webm`,
                },
                "explosion": {
                    "gray": `${PATH}/air/air_explosion_800x800.webm`,
                    "blue": `${PATH}/air/air_explosion_blue_800x800.webm`,
                    "green": `${PATH}/air/air_explosion_green_800x800.webm`,
                    "purple": `${PATH}/air/air_explosion_purple_800x800.webm`,
                    "red": `${PATH}/air/air_explosion_red_800x800.webm`,
                    "yellow": `${PATH}/air/air_explosion_yellow_800x800.webm`,
                },
                "gust": {
                    "gray": `${PATH}/air/air_gust_800x800.webm`,
                    "blue": `${PATH}/air/air_gust_blue_800x800.webm`,
                    "green": `${PATH}/air/air_gust_green_800x800.webm`,
                    "purple": `${PATH}/air/air_gust_purple_800x800.webm`,
                    "red": `${PATH}/air/air_gust_red_800x800.webm`,
                    "square": `${PATH}/air/air_gust_SQUARE_01.webm`,
                    "yellow": `${PATH}/air/air_gust_yellow_800x800.webm`,
                },
                "infinity": `${PATH}/air/air_infinity_RECTANGLE_01.webm`,
                "portal": `${PATH}/air/air_portal_CIRCLE_01.webm`,
                "puff": {
                    "01": `${PATH}/air/air_puff_CIRCLE_01.webm`,
                    "02": `${PATH}/air/air_puff_CIRCLE_02.webm`,
                    "03": `${PATH}/air/air_puff_CIRCLE_03.webm`,
                },
                "spiral": {
                    "gray": `${PATH}/air/air_spiral_800x800.webm`,
                    "blue": `${PATH}/air/air_spiral_blue_800x800.webm`,
                    "green": `${PATH}/air/air_spiral_green_800x800.webm`,
                    "purple": `${PATH}/air/air_spiral_purple_800x800.webm`,
                    "red": `${PATH}/air/air_spiral_red_800x800.webm`,
                    "yellow": `${PATH}/air/air_spiral_yellow_800x800.webm`,
                },
                "wall": `${PATH}/air/air_wall_SQUARE_01.webm`,
            },
            "cantrips": {},
            "conditions": {},
            "earth": {},
            "electricity": {},
            "energy": {},
            "explosions": {},
            "fire": {},
            "flash": {},
            "level 01": {},
            "level 02": {},
            "magic": {},
            "misc": {},
            "mix": {},
            "simple": {},
            "smoke": {},
            "water": {},
        };
        Sequencer.Database.registerEntries('animated-spell-effects-cartoon', cartoonDatabase);
    }
});