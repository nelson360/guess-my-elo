<template>
/* eslint-disable */
<p>Chuck Norris has never blinked in his entire life. Never. M.C. Hammer learned the hard way that Chuck Norris can touch this. When Chuck Norris does a pushup, he’s pushing the Earth down. Chuck Norris can slam revolving doors. Chuck Norris beats rock, paper, scissors. Cannon balls, tanks, super destroyers, exploding stars — I could go on.</p>
<p> Chuck Norris sleeps with a pillow under his gun.A bulletproof vest wears Chuck Norris for protection. Chuck Norris doesn’t read books. He stares them down until he gets the information he wants. Chuck Norris can clap with one hand. Chuck Norris can slam revolving doors. Chuck Norris once ordered a steak in a restaurant. The steak did what it was told.
    Chuck Norris can make a slinky go upstairs. Mission Impossible was originally set in Chuck Norris’s house. Chuck Norris can clap with one hand. Death once had a near-Chuck-Norris experience. Chuck Norris’ tears cure cancer. Too bad he has never cried.

</p>

<body>
    <div class="row">
        <div class="col-sm-7 col-md-6">
            <span class="h3" id="time1">0:05:00</span>
            <div id="board" style="width: 400px"></div>
            <span class="h3" id="time2">0:05:00</span>
            <hr>
            <div id="engineStatus">...</div>
        </div>
        <div class="col-sm-5 col-md-6">
            <h3>Moves:</h3>
            <div id="pgn"></div>
            <hr>
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="timeBase" class="control-label col-xs-4 col-sm-6 col-md-4">Base time (min)</label>
                    <div class="col-xs-4 col-sm-6 col-md-4">
                        <input type="number" class="form-control" id="timeBase" value="5">
                    </div>
                </div>
                <div class="form-group">
                    <label for="timeInc" class="control-label col-xs-4 col-sm-6 col-md-4">Increment (sec)</label>
                    <div class="col-xs-4 col-sm-6 col-md-4">
                        <input type="number" class="form-control" id="timeInc" value="2">
                    </div>
                </div>
                <div class="form-group">
                    <label for="skillLevel" class="control-label col-xs-4 col-sm-6 col-md-4">Skill Level (0-20)</label>
                    <div class="col-xs-4 col-sm-6 col-md-4">
                        <input type="number" class="form-control" id="skillLevel" value="0">
                    </div>
                </div>
                <div class="form-group">
                    <label for="color" class="control-label col-xs-4 col-sm-6 col-md-4">I play</label>
                    <div class="col-xs-4 col-sm-6 col-md-4">
                        <div class="btn-group" data-toggle="buttons">
                            <label class="btn btn-primary active" id="color-white"><input type="radio" name="color">White</label>
                            <label class="btn btn-primary" id="color-black"><input type="radio" name="color">Black</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="showScore" class="control-label col-xs-4 col-sm-6 col-md-4">Show score</label>
                    <div class="col-xs-4 col-sm-6 col-md-4">
                        <input type="checkbox" class="form-control" id="showScore" checked>
                    </div>
                </div>
                <div class="form-group">
                    <label for="color" class="control-label col-xs-4 col-sm-6 col-md-4"></label>
                    <div class="col-xs-4 col-sm-6 col-md-4">
                        <button type="button" class="btn btn-primary" onclick="newGame()">New Game</button>
                    </div>
                </div>

                <div class="form-group">
                    <label for="color" class="control-label col-xs-4 col-sm-6 col-md-4">Promote to</label>
                    <div class="col-xs-4 col-sm-6 col-md-4">
                        <select id=promote>
                            <option value=q selected>Queen</option>
                            <option value=r>Rook</option>
                            <option value=b>Bishop</option>
                            <option value=n>Knight</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="elo-base" class="control-label col-xs-4 col-sm-6 col-md-4">Base time (min)</label>
                    <div class="col-xs-4 col-sm-6 col-md-4">
                        <input type="number" class="form-control" id="timeBase" value="5">
                    </div>
                </div>
            </form>
            <h5>Evaluation</h5>
            <pre id=evaluation></pre>
        </div>
        <a-pagination v-model="current" :total="50" show-less-items />
        <Antd></Antd>

        <div>
            <h1>Simple Chessboard with legal moves</h1>
            <chessboard />
            <h1>Simple Chessboard with free moves</h1>
            <chessboard :free="true" />

            <h1>Simple Chessboard that shows threats for current position and player</h1>
            <chessboard :showThreats="true" />

            <h1>Fen binded to the chessboard (load position when click on a new position)</h1>
            <chessboard :fen="currentFen" />
            <button class="button is-light" @click="loadFen(fen)" v-for="fen in fens" :key="fen + '-binded'">
                {{fen}}
            </button>

            <h1>Chessboard with binded onmove method. Shows threats on text area</h1>
            <chessboard @onMove="showInfo" />
            <div>
                {{this.positionInfo}}
            </div>

            <h1>Chessboard with onpromote callback. </h1>
            It will show you a simple confirmation box asking if you want to promote to queen or rook.
            You can use a fancy piece selector instead of this simple confirmation box.
            <chessboard :onPromotion="promote" />

            <h1>Multiple Chessboards with different fens. </h1>
            <div v-for="fen in fens" :key="fen">
                <chessboard :fen="fen" />
            </div>

            <h1>Extended Component (Play vs random AI with undos). </h1>
            <p> You can extend the chessboard component to add new methods. Play against random moves and undo the moves</p>

            <NewBoard />
            <button class="button is-light" @click="undo()">UNDO</button>

            <h1>Fully free piece movement. </h1>
            <p> You can extend the chessboard component to use all <a href='https://github.com/ornicar/chessground/blob/master/src/config.ts'>chessgrounds configurations</a></p>
            <EditorComponent />

        </div>
    </div>
</body>
</template>

<script>
import Antd from "ant-design-vue";
import {
    chessboard
} from 'vue-chessboard';
import 'vue-chessboard/dist/vue-chessboard.css';
import 'vue-chessboard/dist/vue-chessboard.css'
import NewBoard from './NewBoard.vue'
import EditorComponent from '/src/EditorComponent.vue'
import bus from '/src/bus.js'

export default {
    name: 'BodyComponent',
    components: {
        Antd,
        chessboard,
        NewBoard,
        EditorComponent
    },
    data() {
        return {
            currentFen: '',
            positionInfo: null
        }
    },
    methods: {
        showInfo(data) {
            this.positionInfo = data
        },
        loadFen(fen) {
            this.currentFen = fen
        },
        promote() {
            if (confirm("Want to promote to rook? Queen by default")) {
                return 'r'
            } else {
                return 'q'
            }
        },
        undo() {
            bus.$emit('undo')
        }
    },
    created() {
        this.fens = ['5rr1/3nqpk1/p3p2p/Pp1pP1pP/2pP1PN1/2P1Q3/2P3P1/R4RK1 b - f3 0 28',
            'r4rk1/pp1b3p/6p1/8/3NpP2/1P4P1/P2K3P/R6R w - - 0 22'
        ]
    }

}
</script>

<style></style>
