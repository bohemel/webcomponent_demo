<?php

namespace Drupal\tmp_player\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Webcomponent Demo' Block.
 *
 * @Block(
 *   id = "webcomponent_demo_block",
 *   admin_label = @Translation("Webcomponent demo block"),
 *   category = @Translation("Webcomponent Demo"),
 * )
 */
class WebcomponentDemoBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      'player' => [
        '#theme' => 'webcomponent_demo_theme',
        '#attached' => ['library' => ['webcomponent_demo/element']],
      ],
    ];
  }

}
