import React from 'react'

function Header() {
  return (
    <div class="header">
      
    <h1>Cooking Haven</h1>
    <a href="http://">Recipes</a>
    <a href="http://">My Kitchen</a>
    <a href="http://">Quick Meals</a>
    <form>
        <input type="text" placeholder="Find a recipe"></input>
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M232 160a72 72 0 1072 72 72 72 0 00-72-72z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M283.64 283.64L336 336"/></svg>
    </form>
  
    <a href="http://">About us</a>

</div>

  )
}

export default Header