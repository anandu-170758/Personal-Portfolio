import React from 'react'
import "../styles/skills.css"
function skills() {
  return (
    <div class="timeline">
    <ul>
      <li>
        <div class="bullet pink"></div>
        <div class="time">7am</div>
        <div class="desc">
          <h3>Breakfast Boost</h3>
          <h4>Plan The Day</h4>
        </div>
      </li>
      <li>
        <div class="bullet green"></div>
        <div class="time">9 - 10am</div>
        <div class="desc">
          <h3>Team Stand Up</h3>
          <h4>Take notes</h4>
        </div>
      </li>
      <li>
        <div class="bullet green"></div>
        <div class="time">10 - 1pm</div>
        <div class="desc">
          <h3>Pair Programming</h3>
          <h4>Discuss Issues</h4>
        </div>
      </li>
      <li>
        <div class="bullet orange"></div>
        <div class="time">1pm</div>
        <div class="desc">
          <h3>Lunch Break</h3>
        </div>
      </li>
      <li>
        <div class="bullet green"></div>
        <div class="time">3 - 5pm</div>
        <div class="desc">
          <h3>Week's Project</h3>
          <h4>Web Design</h4>
        </div>
      </li>
    </ul>
  </div>  
  )
}

export default skills