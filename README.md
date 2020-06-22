
_This project won the Grand Prize at Virtual DefHacks 2020. View it on Devpost [here](https://devpost.com/software/synplifier)._

_View the Demo on Youtube: https://youtu.be/bEU3AGqW_ro._

# A Synthetic Biology Procedures Simplifier

As a way to grow diagnostic reagents from anywhere around the world, synthetic biology should allow for a proliferation of DIY viral testing. Yet the potential of synthetic biology remains locked behind complex lab protocols and largely restricted to highly specialized research fields. While the key to its potential, small DNA pieces known as plasmids, can easily travel around the world, the knowledge required to use them fails to do the same.

Synplifier allows scientists to translate production protocols into robust and user friendly walkthroughs. Think of it as a compiler for synthetic biology protocols-- going first from an academic lab protocol to standardized commands, and from standardized commands to a step-by-step breakdown. This simplification process relies on the modular nature of synthetic biology protocols. Essential protocols in synthetic biology-- growing, transforming, and inducing bacteria--are not difficult operations. At the most granular level, much can be reduced to the simple transfer of liquids or raising and lowering temperatures.
![Demo view of Synplifier](https://raw.githubusercontent.com/rkique/synplifier/master/images/synplifierdemoview.PNG)
To demonstrate just how accessible synthetic biology can be, we took a COVID diagnostic protocol and wrote it into our pseudo compiler, a javascript and p5js application. The result is a series of 86 simple commands (think “move 5ml of liquid from red cup to blue flask”) that can be followed without scientific literacy, fine motor control, or even knowledge of the English language. When developed in tandem with the test production kits, synplifier would be instrumental in the creation of test production capabilities anywhere in the world. In doing so, Synplifier and Synbio approaches to diagnostics aim to improve the lives of many--not through one time test distribution, but by investing in long term production.

We envision this tool being used to make many synthetic biology protocols simpler, or even as part of a regular workflow. However, the accessibility of testing can be life saving, and this is where we feel Synplifier can really excel: in combination with distributed enzymes, testing, and test kit production can be done within the community by the community. With this in mind, the example use of this utility is the LAMP-DETECTR diagnostic as listed here: https://mammoth.bio/wp-content/uploads/2020/02/A-protocol-for-rapid-detection-of-the-2019-novel-coronavirus-SARS-CoV-2-using-CRISPR-diagnostics-SARS-CoV-2-DETECTR.pdf. 


# Usage 

Synplifier runs in Javascript, which allows for quick modifications and automation.

To use this tool, run index.html to bring up the development environment. Go to the Commands Guide to view descriptions of each command.

Enter Reagent objects into the upper window and enter procedures into the bottom one. This will generate a walkthrough of testing steps in a window on the right, which can be matched to regular lab equipment and supplies or used in conjunction with specialized test production kits.


