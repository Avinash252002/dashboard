export class Video {
  static get toolbox() {
    return {
      title: "Video",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100" height="100" viewBox="0 0 100 100" id="video"><g><path d="M84.9 26.4L68 37.3V34c0-4.4-3.6-8-8-8H20c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-3.3l16.9 10.9c1.9 1 3.1-.7 3.1-1.7V28c0-1-1.1-2.8-3.1-1.6zM64 66c0 2.2-1.8 4-4 4H20c-2.2 0-4-1.8-4-4V34c0-2.2 1.8-4 4-4h40c2.2 0 4 1.8 4 4v32zm20 2.3L68 58V42l16-10.3v36.6z"></path></g><g><path fill="#00F" d="M1224-650v1684H-560V-650h1784m8-8H-568v1700h1800V-658z"></path></g></svg>',
    };
  }

  render() {
    const wrapper = document.createElement("div");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Paste YouTube URL here";
    input.style.display = "block";
    input.style.width = "100%";
    input.style.marginBottom = "10px";
    input.style.padding = "5px";

    const videoPreview = document.createElement("iframe");
    videoPreview.style.width = "100%";
    videoPreview.style.height = "315px";
    videoPreview.style.display = "none";
    videoPreview.setAttribute("frameborder", "0");
    videoPreview.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    videoPreview.setAttribute("allowfullscreen", "true");

    input.addEventListener("input", (event) => {
      const url = event.target.value;
      const videoId = this.extractVideoID(url);
      if (videoId) {
        videoPreview.src = `https://www.youtube.com/embed/${videoId}`;
        videoPreview.style.display = "block"; // Show the video
      } else {
        videoPreview.src = "";
        videoPreview.style.display = "none"; // Hide the video if the URL is invalid
      }
    });

    // Append input and video preview to the wrapper
    wrapper.appendChild(input);
    wrapper.appendChild(videoPreview);

    return wrapper;
  }

  save(blockContent) {
    const inputElement = blockContent.querySelector("input");
    inputElement.addEventListener("input", (event) => {
      const url = event.target.value;
      const videoId = this.extractVideoID(url);
      if (videoId) {
        return {
          url: `https://www.youtube.com/embed/${videoId}`,
        };
      }
    });

    return {
      url: inputElement ? inputElement.value : "",
    };
  }

  extractVideoID(url) {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
}
