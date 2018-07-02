class List {
    constructor(listName) {
      this.listName = listName;
    }
    buildList(){
      const newDIV = document.createElement('DIV');
      const listID = document.getElementById('lists');
      const ul = document.createElement('UL');
      ul.id = this.listName;
      const h2 = document.createElement('H2');
      h2.innerHTML = this.listName;
      const btn = document.createElement('BUTTON');
      btn.dataset.title = this.listName;
      btn.innerHTML = "X";
      btn.setAttribute('class','delete-list');
      h2.appendChild(btn);
      newDIV.appendChild(h2);
      newDIV.appendChild(ul);
      listID.appendChild(newDIV);

    }
}
