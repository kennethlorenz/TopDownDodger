// Immediate Invoked Anonymous Function

(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene information
    let currentScene:objects.Scene;
    let currentState:number;

    let keyboardManager : managers.Keyboard;

    let textureAtlasData: any;
    let textureAtlas: createjs.SpriteSheet;

    textureAtlasData = {
        "images": [
            ""
        ],
        
        "framerate": 20,
        "frames": [
        [1, 1, 17, 17, 0, -36, -36],
    [20, 1, 39, 31, 0, 0, 0],
    [61, 1, 65, 41, 0, 0, 0],
    [128, 1, 51, 51, 0, -19, -19],
    [1, 54, 252, 61, 0, -2, -2],
    [1, 117, 67, 67, 0, -11, -11],
    [1, 186, 250, 69, 0, 0, 0],
    [1, 257, 71, 73, 0, -9, -8],
    [74, 257, 92, 75, 0, 0, 0],
    [168, 257, 81, 81, 0, -4, -4],
    [1, 340, 81, 81, 0, -4, -4],
    [84, 340, 81, 82, 0, -4, -4],
    [167, 340, 85, 85, 0, -2, -2],
    [1, 427, 87, 87, 0, -1, -1],
    [90, 427, 89, 89, 0, 0, 0],
    [1, 518, 89, 89, 0, 0, 0],
    [92, 518, 127, 94, 0, 0, 0],
    [1, 614, 79, 103, 0, 0, 0],
    [82, 614, 136, 129, 0, 0, 0],
    [1, 745, 244, 272, 0, 0, 0]
    ],

    "animations": {
    "nextbutton": { "frames": [1] },
    "player": { "frames": [2] },
    "menubutton": { "frames": [4] },
    "PlayButton": { "frames": [6] },
    "explosion": { 
        "frames": [5,15],
        "speed": 0.01 
    },
    "enemy2": { "frames": [16] },
    "enemy": { "frames": [17] },
    "enemy3": { "frames": [18] },
    "enemyboss": { "frames": [19] }
    }
    };

    assetManifest = [
        {id:"textureAtlas", src:"./Assets/Sprites/textureAtlas.png"},
        {id:"background", src:"./Assets/background.png"},
        {id:"bossbackground", src:"./Assets/bossbackground.png"},
        {id:"explosion", src:"./Assets/Audio/explode.wav"},
        {id:"start_music", src:"./Assets/Audio/bgm/Map.wav"},
        {id:"play_music", src:"./Assets/Audio/bgm/Mercury.wav"},
        {id:"game_over_music", src:"./Assets/Audio/bgm/MapBasic.wav"},
        {id:"boss_music", src:"./Assets/Audio/bgm/BossMain.wav"},
        {id:"win_music", src:"./Assets/Audio/bgm/WinJingle.wav"},
        {id:"win_screen_music", src:"./Assets/Audio/bgm/Venus.wav"}
        
        

    ];

    function Init() {
        console.log("Initializing Start");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() {
        console.log("Starting Application...");

        textureAtlasData.images = [ assetManager.getResult("textureAtlas")]

        textureAtlas = new createjs.SpriteSheet(textureAtlasData);

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        // Set up default game states -- State Machine
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;

        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;

        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;

        Main();
    }

    function Update() {
        // Has my state changed since the last check?
        if(currentState != managers.Game.currentScene)
        {
            console.log("Changing scenes to " + managers.Game.currentScene);
            Main();
        }

        currentScene.Update();
        stage.update();
    }


    function Main() {
        console.log("Game Start");

        // Finite State Machine
        switch(managers.Game.currentScene)
        {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
            break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
            break;
            case config.Scene.BOSS:
                stage.removeAllChildren();
                currentScene = new scenes.BossScene();
                stage.addChild(currentScene);
            break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
            break;
            case config.Scene.WIN:
                stage.removeAllChildren();
                currentScene = new scenes.WinScene();
                stage.addChild(currentScene);
            break;
        }

        currentState = managers.Game.currentScene;
    }

    window.onload = Init;
})();