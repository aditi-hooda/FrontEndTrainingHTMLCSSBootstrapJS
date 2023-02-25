import { images } from "../assets/images";

export const week1 = [
  {
    id: "Week1Topic1",
    type: "reading",
    title: "Setting up your local development environment, Part 1: VS Code",
    reading: [
      {
        tag: "p",
        data: "First, you need to download the IDE from Microsoft's website - ",
      },
      {
        tag: "a",
        data: "https://code.visualstudio.com/download",
      },
      {
        tag: "p",
        data: `Select the download based on your operating system.
        Windows
        Step 1: Download the Windows installer.
        Step 2: Open the file to install it once the download is complete.
        Step 3: Review and accept the license agreement, then click Next.
        `,
      },
      {
        tag: "img",
        data: images.vsinstallation1,
      },
      {
        tag: "p",
        data: "Step 4: Keep the default value when prompted for the destination location and click next.",
      },
      {
        tag: "img",
        data: images.vsinstallation2,
      },
      {
        tag: "p",
        data: "Step 5: On the additional tasks view, make sure that Add to PATH is selected.",
      },
      {
        tag: "img",
        data: images.vsinstallation3,
      },
      {
        tag: "p",
        data: `Step 6: Click next.
        Step 7: Click install when the ready to install page appears.
        `,
      },
      {
        tag: "img",
        data: images.vsinstallation4,
      },
      {
        tag: "p",
        data: "Step 8: Click finish once completed, and the application will launch.",
      },
    ],
  },
  {
    id: "Week1Topic2",
    type: "video",
    trim: {
      startTime: 74,
      endTime: 158,
    },
    title: "Setting up your local development environment, Part 2: Git",
    href: "https://d3c33hcgiwev3.cloudfront.net/PR-TWfauEeW7ew7OSDCP6w.processed/full/720p/index.mp4?Expires=1677456000&Signature=T1SpPfC-J3o6jhsMagsibYivH0oN0mELckLqFsitmsVoRjHDtXwTNTYZz9oZnifnEaYiV~0fZbamyh2KpzAXepM4T-gWuLh6q-6Jtgd4fm0VaHK-SCQL9cscau8fJhN-xpMlOdx52AeBjDJieL98gVwOS11Qk6LbqYhQ3yr9DOM_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A",
    subtitles: images.gitSubtitles,
  },
  {
    id: "Week1Topic3",
    type: "video",
    trim: {
      startTime: 0,
      endTime: 909,
    },
    title: "Setting up your local development environment, Part 3: GitHub",
    href: "https://d3c33hcgiwev3.cloudfront.net/1urSCa0qQ0Oq0gmtKkNDdA.processed/full/720p/index.mp4?Expires=1677456000&Signature=KA41vEg-C7dYAHwAAMDHFa7K9sZvmcDwnW44xwqGnUNGG4umeDZXa6f0K-HkyrZbZrGi19u3jXsNeuYDjwkSlbzfdT9eJx~VwpYm3geeOrTcprWL7I5C4yJP0RLjFutyv5H0HegGpWSPWWooWSy8cOxv2nx~YrM5Iyz0S2X1hiw_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A",
    subtitles: images.gitHubSubtitles,
  },
  {
    id: "Week1Topic4",
    type: "video",
    title: "Intro to HTML, CSS and Javascript",
    href: "https://d3c33hcgiwev3.cloudfront.net/03p_KYsDTbetlJe5E-mVIA.processed/full/720p/index.mp4?Expires=1677369600&Signature=cBrUXc9Mkm0u9N9zEd-M1Ex-~DnpJ5v0KfDziTzMitND1pQEKIsSWvWL6Q7PcaFL3YQ6XyAsB0LLfQ5q5PR0uV8HMvk4p~Ro0RyTIAdLqKHd8M3TAcpqJ-o-59bblEDJxMarAvsp3ll72OqVJKFp22HiEW-t4Pp68BsoDCI6q~k_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A",
  },
  {
    id: "Week1Topic5",
    type: "video",
    title: "Developer tools",
    href: "https://d3c33hcgiwev3.cloudfront.net/-o-JWpCRTpGDTdCJ0OVC3w.processed/full/720p/index.mp4?Expires=1677369600&Signature=U5W8ythr-J7gVQGS~nTHECyB6dKFL-E4luSoV1Gx5wuUK~FSmvK3GV~Vej3-jxETNF3F7nbT9jKMAl6pejKxKQ3MLSXxhNEDquCSq~X7kfamPL1o-nvSrgihc-Sko87shYArFHe-KBNO8SO0JbHuHuEvz5SiwoHNWMEwAHR9n30_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A",
  },
  {
    id: "Week1Topic6",
    type: "reading",
    title: "Exercise: Examine a web page",
    reading: [
      {
        tag: "p",
        data: `Introduction
        In this exercise, you will practice examining an HTML page using the developer tools.
        Goal
        •	Inspect the HTML document using the developer tools in your browser.
        Objectives
        •	Find the HTML ID of the Little Lemon logo.
        Instructions
        Step 1: Download the following file on your local system.
        `,
      },
      {
        tag: "a",
        data: "https://d3c33hcgiwev3.cloudfront.net/87FmqOJ9RLqxZqjifZS6wg_49b1f0d2659c4a8ea0cf9e9db16505e1_examine_the_page.zip?Expires=1677369600&Signature=g2nz2VFjUJ67mxh78dK1RIW5BOnMkNwm9iqhjPYodGWYR4HUTIKH4z1h0O-YmCNdiFb1QL1gqBksNKXFl1qBjGvua1M-VO3ziCW-~SsgGomMf4vBCxRglRFPHW9pmAPF6Mi1lwmpH18JJzUbSvv8wuFArQbQgxw0zX5CU-7OajI_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A",
        text: `Download ZIP File`,
      },
      {
        tag: "p",
        data: `Step 2: Unzip the file.
        On Windows, open your Downloads folder, right-click the file examine_the_page.zip and select Extract All.`,
      },
      {
        tag: "img",
        data: images.Exercise1Img1,
      },
      {
        tag: "p",
        data: `Once unzipped, there will be a folder named examine_the_page.
        Step 3: Open the folder and double click index.html to view the file in your local web browser. Verify that it looks like this:
        `,
      },
      {
        tag: "img",
        data: images.Exercise1Img2,
      },
      {
        tag: "p",
        data: "Step 4: Right-click the Little Lemon logo and select Inspect (or Inspect Element)",
      },
      {
        tag: "img",
        data: images.Exercise1Img3,
      },
      {
        tag: "p",
        data: `Step 5: Inspect the line in the HTML for the logo in the developer tools panel. The line begins with <img.
        Note: In the line, there is an ID in the following format id="???". Note the value that the ID is equal to.        
        `,
      },
      {
        tag: "img",
        data: images.Exercise1Img4,
      },
      {
        tag: "img",
        data: images.Exercise1Img5,
      },
      {
        tag: "p",
        data: `Tips:`,
      },
      {
        tag: "p",
        data: " •	If you get stuck, close the developer tools and start over.",
      },
      {
        tag: "p",
        data: " •	Review the lesson Developer Tools.",
      },
    ],
  },
];
