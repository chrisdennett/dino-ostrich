import ScoreZone from '../../prefabs/ui/ScoreZone';
import CurrentScorePanel from '../../prefabs/ui/CurrentScorePanel';
import HighScorePanel from '../../prefabs/ui/HighScorePanel';
import GameOverPanel from '../../prefabs/ui/GameOverPanel';

/**
 * UI
 * @class UI
 */
class UI {
  /**
   * Creates an instance of UI
   * @param {Phaser.Scene} scene - The Scene to which this UI belongs
   */
  constructor(scene) {
    this.scene = scene;

    this.init();
  }

  /**
   * Init
   */
  init() {
    const { scene } = this;

    this.currentScorePanel = new CurrentScorePanel(scene);
    this.highScorePanel = new HighScorePanel(scene);
    this.gameOverPanel = new GameOverPanel(scene);
    this.scoreZone = new ScoreZone(this.currentScorePanel, this.highScorePanel);
  }

  /**
   * Update UI
   * @param {boolean} isPlaying - Whether game is running
   * @param {Phaser.Structs.Size} gameSize - Current game size
   * @param {number} score - Current game score
   */
  update(isPlaying, gameSize, score) {
    this.currentScorePanel.update(isPlaying, score);
    this.highScorePanel.update(score);
    this.scoreZone.update(gameSize);
  }

  /**
   * Resize UI
   * @param {Phaser.Structs.Size} gameSize - Current game size
   */
  resize(gameSize) {
    this.scoreZone.resize(gameSize);
    this.gameOverPanel.resize(gameSize);
  }
}

export default UI;
