class List {
    constructor(listName) {
      this.listName = listName;
    }
    buildList(){
      const newDIV = document.createElement('DIV');
      const listID = document.getElementById('lists');
      const h2 = document.createElement('H2');
      h2.innerHTML = this.listName;
      const btn = document.createElement('BUTTON');
      btn.dataset.title = this.listName;
      btn.innerHTML = "X";
      btn.setAttribute('class','delete-list');
      h2.appendChild(btn);
      newDIV.appendChild(h2);
      listID.appendChild(newDIV);
    }
}
