/**
 * @GameName :
 * Moon Warriors
 *
 * @DevelopTool:
 * Cocos2d-x Editor (CocosEditor)
 *
 * @Licensed:
 * This showcase is licensed under GPL.
 *
 *  @Authors:
 *  Programmer id:  touchSnow
 *
 *  @Links:
 *  http://blog.csdn.net/touchsnow  (csdn博客)
 *  http://blog.makeapp.co/     （官方博客）
 *  http://www.cocoseditor.com/     （建设中官网）
 *
 *  @Contact
 *  邮箱：zuowen@makeapp.co
 *  qq群：232361142
 *
 */


//game state
MW.GAME_STATE = {
    HOME: 0,
    PLAY: 1,
    OVER: 2
};

//keys
MW.KEYS = [];

//level
MW.LEVEL = {
    STAGE1: 1,
    STAGE2: 2,
    STAGE3: 3
};

//life
MW.LIFE = 4;

//score
MW.SCORE = 0;

//sound
MW.SOUND = true;

//enemy move type
MW.ENEMY_MOVE_TYPE = {
    ATTACK: 0,
    VERTICAL: 1,
    HORIZONTAL: 2,
    OVERLAP: 3
};

//delta x
MW.DELTA_X = -100;

//offset x
MW.OFFSET_X = -24;

//rot
MW.ROT = -5.625;

//bullet type
MW.BULLET_TYPE = {
    PLAYER: 1,
    ENEMY: 2
};

//weapon type
MW.WEAPON_TYPE = {
    ONE: 1
};

//unit tag
MW.UNIT_TAG = {
    ENMEY_BULLET: 900,
    PLAYER_BULLET: 901,
    ENEMY: 1000,
    PLAYER: 1000
};

//attack mode
MW.ENEMY_ATTACK_MODE = {
    NORMAL: 1,
    TSUIHIKIDAN: 2
};

//life up sorce
MW.LIFEUP_SORCE = [50000, 100000, 150000, 200000, 250000, 300000];

//container
MW.CONTAINER = {
    ENEMIES: [],
    ENEMY_BULLETS: [],
    PLAYER_BULLETS: [],
    EXPLOSIONS: [],
    SPARKS: [],
    HITS: []
};

var g_hideSpritePos = cc.p(-10, -10);