export class ColorTool {
    constructor({ api }) {
      this.api = api;
      this.button = null;
      this.colors = ['#EC7878', '#9C27B0', '#673AB7', '#3F51B5', '#0070FF', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFF'];
      this.tag = 'SPAN';
      this.color = null; // Store the selected color
    }
  
    static get isInline() {
      return true;
    }
  
    render() {
      // Create the button to open the color picker popup
      this.button = document.createElement('button');
      this.button.type = 'button';
      this.button.innerHTML = 'A'; // Button text/icon
  
      // Event listener to open the color picker
      this.button.addEventListener('click', () => this.openColorPicker());
  
      return this.button;
    }
  
    // Method to open the color picker with predefined colors
    openColorPicker() {
      const colorPicker = document.createElement('div');
      colorPicker.style.position = 'absolute';
      colorPicker.style.display = 'flex';
      colorPicker.style.backgroundColor = '#fff';
      colorPicker.style.border = '1px solid #ccc';
      colorPicker.style.padding = '5px';
  
      // Add color buttons to the picker
      this.colors.forEach((color) => {
        const colorButton = document.createElement('button');
        colorButton.style.backgroundColor = color;
        colorButton.style.width = '20px';
        colorButton.style.height = '20px';
        colorButton.style.margin = '2px';
        colorButton.style.border = 'none';
  
        // Add click listener to apply the selected color
        colorButton.addEventListener('click', () => {
          this.color = color; // Store the selected color
          this.applyColor(color);
          document.body.removeChild(colorPicker); // Remove color picker after color selection
        });
  
        colorPicker.appendChild(colorButton);
      });
  
      // Append the color picker to the body
      document.body.appendChild(colorPicker);
    }
  
    // Apply the selected color to the selected text
    applyColor(color) {
      const selectedText = window.getSelection().toString();
  
      if (selectedText) {
        this.api.inlineToolbar.close(); // Close inline toolbar
        this.api.blocks.insert(); // Create a new block for the color application
        this.api.selection.expandToTag(this.tag); // Wrap selected text in a span
  
        const selectedRange = window.getSelection().getRangeAt(0);
        const span = document.createElement(this.tag);
        span.style.color = color;
        selectedRange.surroundContents(span);
      }
    }
  
    // Save the block with the applied color
    save(blockContent) {
      const spanElements = blockContent.querySelectorAll('span');
      const textData = [];
  
      spanElements.forEach((span) => {
        textData.push({
          text: span.innerText,
          color: span.style.color,
        });
      });
  
      return textData;
    }
  
    static get sanitize() {
      return {
        span: {
          style: true,
        },
      };
    }
  }
  