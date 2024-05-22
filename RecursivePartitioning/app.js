const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const splitVertical = (element) => {
  element.style.flexDirection = "row";
  const newPartition = document.createElement("div");
  newPartition.className = "partition";
  newPartition.style.backgroundColor = getRandomColor();
  newPartition.style.width = "50%";
  newPartition.style.height = "100%";
  newPartition.innerHTML = `
        <div class="buttons">
            <button onclick="splitVertical(this.parentElement.parentElement)">V</button>
            <button onclick="splitHorizontal(this.parentElement.parentElement)">H</button>
            <button onclick="removePartition(this.parentElement.parentElement)">-</button>
        </div>`;
  element.style.width = "50%";
  element.parentElement.appendChild(newPartition);
};

const splitHorizontal = (element) => {
  element.style.flexDirection = "column";
  const newPartition = document.createElement("div");
  newPartition.className = "partition";
  newPartition.style.backgroundColor = getRandomColor();
  newPartition.style.width = "100%";
  newPartition.style.height = "50%";
  newPartition.innerHTML = `
        <div class="buttons">
            <button onclick="splitVertical(this.parentElement.parentElement)">V</button>
            <button onclick="splitHorizontal(this.parentElement.parentElement)">H</button>
            <button onclick="removePartition(this.parentElement.parentElement)">-</button>
        </div>`;
  element.style.height = "50%";
  element.parentElement.appendChild(newPartition);
};

const removePartition = (element) => {
  element.parentElement.removeChild(element);
};
