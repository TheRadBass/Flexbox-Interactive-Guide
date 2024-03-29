const flexDirectionContainer = document.getElementById('flex-direction-container');
const directionRowReverseButton = document.getElementById('flex-direction-row-reverse-button');
const directionRowButton = document.getElementById('flex-direction-row-button');
const directionColumnButton = document.getElementById('flex-direction-column-button');
const directionColumnReverseButton = document.getElementById('flex-direction-column-reverse-button');
const codeContainerFlexDirection = document.getElementById('code-container-flex-direction');
const flexDirectionLeftAxis = document.getElementById('flex-direction-left-axis');
const flexDirectionBottomAxis = document.getElementById('flex-direction-bottom-axis');
const flexWrapContainer = document.getElementById('flex-wrap-container');
const flexWrapWrapButton = document.getElementById('flex-wrap-wrap-button');
const flexWrapNowrapButton = document.getElementById('flex-wrap-nowrap-button');
const flexWrapWrapReverseButton = document.getElementById('flex-wrap-wrap-reverse-button');
const codeContainerFlexWrap = document.getElementById('code-container-flex-wrap');
const justifyContentContainer = document.getElementById('justify-content-container');
const justifyContentFlexStartButton = document.getElementById('justify-content-flex-start-button');
const justifyContentFlexEndButton = document.getElementById('justify-content-flex-end-button');
const justifyContentCenterButton = document.getElementById('justify-content-center-button');
const justifyContentSpaceBetweenButton = document.getElementById('justify-content-space-between-button');
const justifyContentSpaceAroundButton = document.getElementById('justify-content-space-around-button');
const justifyContentSpaceEvenlyButton = document.getElementById('justify-content-space-evenly-button');
const codeContainerJustifyContent = document.getElementById('code-container-justify-content');
const alignItemsContainer = document.getElementById('align-items-container');
const alignItemsFlexStartButton = document.getElementById('align-items-flex-start-button');
const alignItemsFlexEndButton = document.getElementById('align-items-flex-end-button');
const alignItemsCenterButton = document.getElementById('align-items-center-button');
const alignItemsStretchButton = document.getElementById('align-items-stretch-button');
const alignItemsBaselineButton = document.getElementById('align-items-baseline-button');
const codeContainerAlignItems = document.getElementById('code-container-align-items');
const alignContentContainer = document.getElementById('align-content-container');
const alignContentFlexStartButton = document.getElementById('align-content-flex-start-button');
const alignContentFlexEndButton = document.getElementById('align-content-flex-end-button');
const alignContentCenterButton = document.getElementById('align-content-center-button');
const alignContentStretchButton = document.getElementById('align-content-stretch-button');
const alignContentSpaceBetweenButton = document.getElementById('align-content-space-between-button');
const alignContentSpaceAroundButton = document.getElementById('align-content-space-around-button');
const codeContainerAlignContent = document.getElementById('code-container-align-content');
const gapContainer = document.getElementById('gap-container');
const rowGapMinusButton = document.getElementById('row-gap-minus-button');
const rowGapPlusButton = document.getElementById('row-gap-plus-button');
const columnGapMinusButton = document.getElementById('column-gap-minus-button');
const columnGapPlusButton = document.getElementById('column-gap-plus-button');
const gapRowVar1 = document.getElementById('gap-row-var1');
const gapRowVar2 = document.getElementById('gap-row-var2');
const gapColVar1 = document.getElementById('gap-col-var1');
const gapColVar2 = document.getElementById('gap-col-var2');
const orderDude = document.getElementById('order-dude');
const orderZeroButton = document.getElementById('order-zero-button');
const orderOneButton = document.getElementById('order-one-button');
const codeContainerOrder = document.getElementById('code-container-order');
const flexGrowDude = document.getElementById('flex-grow-dude');
const flexGrowMinusButton = document.getElementById('flex-grow-minus-button');
const flexGrowPlusButton = document.getElementById('flex-grow-plus-button');
const flexGrowVar = document.getElementById('flex-grow-var');
const flexShrinkContainer = document.getElementById('flex-shrink-container');
const flexShrink20Button = document.getElementById('flex-shrink-20-button');
const flexShrink40Button = document.getElementById('flex-shrink-40-button');
const flexShrink60Button = document.getElementById('flex-shrink-60-button');
const flexShrink80Button = document.getElementById('flex-shrink-80-button');
const alignSelfDude = document.getElementById('align-self-dude');
const alignSelfFlexStartButton = document.getElementById('align-self-flex-start-button');
const alignSelfFlexEndButton = document.getElementById('align-self-flex-end-button');
const alignSelfCenterButton = document.getElementById('align-self-center-button');
const alignSelfStretchButton = document.getElementById('align-self-stretch-button');
const alignSelfBaselineButton = document.getElementById('align-self-baseline-button');
const codeContainerAlignSelf = document.getElementById('code-container-align-self');

directionRowButton.onclick = function() {
    flexDirectionContainer.style.flexDirection = 'row';
    codeContainerFlexDirection.children[2].innerHTML = '<p class="code">flex-direction: <var>row</var>;</p>';
    flexDirectionLeftAxis.children[0].innerText = "Cross Axis ↕";
    flexDirectionBottomAxis.children[0].innerText =  "Main Axis ↔";
}

directionRowReverseButton.onclick = function() {
    flexDirectionContainer.style.flexDirection = 'row-reverse';
    codeContainerFlexDirection.children[2].innerHTML = '<p class="code">flex-direction: <var>row-reverse</var>;</p>';
    flexDirectionLeftAxis.children[0].innerText = "Cross Axis ↕";
    flexDirectionBottomAxis.children[0].innerText =  "Main Axis ↔";
}

directionColumnButton.onclick = function() {
    flexDirectionContainer.style.flexDirection = 'column';
    codeContainerFlexDirection.children[2].innerHTML = '<p class="code">flex-direction: <var>column</var>;</p>';
    flexDirectionLeftAxis.children[0].innerText = "Main Axis ↕";
    flexDirectionBottomAxis.children[0].innerText = "Cross Axis ↔";
}

directionColumnReverseButton.onclick = function() {
    flexDirectionContainer.style.flexDirection = 'column-reverse';
    codeContainerFlexDirection.children[2].innerHTML = '<p class="code">flex-direction: <var>column-reverse</var>;</p>';
    flexDirectionLeftAxis.children[0].innerText = "Main Axis ↕";
    flexDirectionBottomAxis.children[0].innerText = "Cross Axis ↔";
}

flexWrapWrapButton.onclick = function() {
    flexWrapContainer.style.flexWrap = 'wrap';
    codeContainerFlexWrap.children[2].innerHTML = 'flex-wrap: <var>wrap</var>;';
}

flexWrapNowrapButton.onclick = function() {
    flexWrapContainer.style.flexWrap = 'nowrap';
    codeContainerFlexWrap.children[2].innerHTML = 'flex-wrap: <var>nowrap</var>;';
}

flexWrapWrapReverseButton.onclick = function() {
    flexWrapContainer.style.flexWrap = 'wrap-reverse';
    codeContainerFlexWrap.children[2].innerHTML = 'flex-wrap: <var>wrap-reverse</var>;';
}

justifyContentFlexStartButton.onclick = function() {
    justifyContentContainer.style.justifyContent = 'flex-start';
    codeContainerJustifyContent.children[2].innerHTML = 'justify-content: <var>flex-start</var>;';

}

justifyContentFlexEndButton.onclick = function() {
    justifyContentContainer.style.justifyContent = 'flex-end';
    codeContainerJustifyContent.children[2].innerHTML = 'justify-content: <var>flex-end</var>;';
}

justifyContentCenterButton.onclick = function() {
    justifyContentContainer.style.justifyContent = 'center';
    codeContainerJustifyContent.children[2].innerHTML = 'justify-content: <var>center</var>;';
}

justifyContentSpaceBetweenButton.onclick = function() {
    justifyContentContainer.style.justifyContent = 'space-between';
    codeContainerJustifyContent.children[2].innerHTML = 'justify-content: <var>space-between</var>;';
}

justifyContentSpaceAroundButton.onclick = function() {
    justifyContentContainer.style.justifyContent = 'space-around';
    codeContainerJustifyContent.children[2].innerHTML = 'justify-content: <var>space-around</var>;';
}

justifyContentSpaceEvenlyButton.onclick = function() {
    justifyContentContainer.style.justifyContent = 'space-evenly';
    codeContainerJustifyContent.children[2].innerHTML = 'justify-content: <var>space-evenly</var>;';
}

function drawBaseline() {
    for(i = 1; i < 8; i = i+=2){
        alignItemsContainer.childNodes[i].style.textDecoration = 'underline';
        alignItemsContainer.childNodes[i].style.textDecorationColor = 'red';
        alignItemsContainer.childNodes[i].style.textDecorationThickness = '2px';
    }
}

function eraseBaseline() {
    for(i = 1; i < 8; i = i+=2){
        alignItemsContainer.childNodes[i].style.textDecoration = '';
        alignItemsContainer.childNodes[i].style.textDecorationColor = '';
    }
}

alignItemsFlexStartButton.onclick = function() {
    alignItemsContainer.style.alignItems = 'flex-start';
    codeContainerAlignItems.children[2].innerHTML = 'align-items: <var>flex-start</var>;'
    eraseBaseline();
}

alignItemsFlexEndButton.onclick = function() {
    alignItemsContainer.style.alignItems = 'flex-end';
    codeContainerAlignItems.children[2].innerHTML = 'align-items: <var>flex-end</var>;'
    eraseBaseline();
}

alignItemsCenterButton.onclick = function() {
    alignItemsContainer.style.alignItems = 'center';
    codeContainerAlignItems.children[2].innerHTML = 'align-items: <var>center</var>;'
    eraseBaseline();
}

alignItemsStretchButton.onclick = function() {
    alignItemsContainer.style.alignItems = 'stretch';
    codeContainerAlignItems.children[2].innerHTML = 'align-items: <var>stretch</var>;'
    eraseBaseline();
}

alignItemsBaselineButton.onclick = function() {
    alignItemsContainer.style.alignItems = 'baseline';
    codeContainerAlignItems.children[2].innerHTML = 'align-items: <var>baseline</var>;'
    drawBaseline();
}

alignContentFlexStartButton.onclick = function() {
    alignContentContainer.style.alignContent = 'flex-start';
    codeContainerAlignContent.children[3].innerHTML = 'align-content: <var>flex-start</var>;';
}

alignContentFlexEndButton.onclick = function() {
    alignContentContainer.style.alignContent = 'flex-end';
    codeContainerAlignContent.children[3].innerHTML = 'align-content: <var>flex-end</var>;';
}

alignContentCenterButton.onclick = function() {
    alignContentContainer.style.alignContent = 'center';
    codeContainerAlignContent.children[3].innerHTML = 'align-content: <var>center</var>;';
}

alignContentStretchButton.onclick = function() {
    alignContentContainer.style.alignContent = 'stretch';
    codeContainerAlignContent.children[3].innerHTML = 'align-content: <var>stretch</var>;';
}

alignContentSpaceBetweenButton.onclick = function() {
    alignContentContainer.style.alignContent = 'space-between';
    codeContainerAlignContent.children[3].innerHTML = 'align-content: <var>space-between</var>;';
}

alignContentSpaceAroundButton.onclick = function() {
    alignContentContainer.style.alignContent = 'space-around';
    codeContainerAlignContent.children[3].innerHTML = 'align-content: <var>space-around</var>;';
}

let currentRowGap = parseInt(gapRowVar1.innerHTML);
let currentColumnGap = parseInt(gapColVar1.innerHTML);

function increaseRowGap() {
    let increasedNumber = (currentRowGap + 2);
    currentRowGap += 2;
    gapContainer.style.rowGap = increasedNumber + 'px';
    gapRowVar1.innerText = increasedNumber;
    gapRowVar2.innerText = increasedNumber;
    if (currentRowGap >= 40){
        rowGapPlusButton.disabled = true;
        rowGapPlusButton.style.backgroundColor = 'red';
    }
    if (currentRowGap > 0){
        rowGapMinusButton.disabled = false;
        rowGapMinusButton.style.backgroundColor = 'black';
    }
}

function decreaseRowGap() {
    let decreasedNumber = (currentRowGap - 2);
    currentRowGap -= 2;
    gapContainer.style.rowGap = decreasedNumber + 'px';
    gapRowVar1.innerText = decreasedNumber;
    gapRowVar2.innerText = decreasedNumber;
    if (currentRowGap == 0){
        rowGapMinusButton.disabled = true;
        rowGapMinusButton.style.backgroundColor = 'red';
    }
    if (currentRowGap < 40){
        rowGapPlusButton.disabled = false;
        rowGapPlusButton.style.backgroundColor = 'black';
    }
}

function increaseColumnGap(){
    let increasedNumber = (currentColumnGap + 2);
    currentColumnGap += 2;
    gapContainer.style.columnGap = increasedNumber + 'px';
    gapColVar1.innerText = increasedNumber;
    gapColVar2.innerText = increasedNumber;
    if (currentColumnGap >= 40){
        columnGapPlusButton.disabled = true;
        columnGapPlusButton.style.backgroundColor = 'red';
    }
    if (currentColumnGap > 0){
        columnGapMinusButton.disabled = false;
        columnGapMinusButton.style.backgroundColor = 'black';
    }
}

function decreaseColumnGap(){
    let decreasedNumber = (currentColumnGap - 2);
    currentColumnGap -= 2;
    gapContainer.style.columnGap = decreasedNumber + 'px';
    gapColVar1.innerText = decreasedNumber;
    gapColVar2.innerText = decreasedNumber;
    if (currentColumnGap == 0){
        columnGapMinusButton.disabled = true;
        columnGapMinusButton.style.backgroundColor = 'red';
    }
    if (currentColumnGap < 40){
        columnGapPlusButton.disabled = false;
        columnGapPlusButton.style.backgroundColor = 'black';
    }
}

rowGapPlusButton.onclick = function(){
    increaseRowGap();
}

rowGapMinusButton.onclick = function(){
    decreaseRowGap();
}

columnGapPlusButton.onclick = function(){
    increaseColumnGap();
}

columnGapMinusButton.onclick = function(){
    decreaseColumnGap();
}

orderZeroButton.onclick = function() {
    orderDude.style.order = '0';
    codeContainerOrder.children[2].innerHTML = "order: <var>0</var>;";
}

orderOneButton.onclick = function() {
    orderDude.style.order = '1';
    codeContainerOrder.children[2].innerHTML = "order: <var>1</var>;";
}

let currentFlexGrowValue = parseInt(flexGrowVar.innerText);

function increaseFlexGrow(flexItem) {
    currentFlexGrowValue += 1;
    flexGrowVar.innerText = currentFlexGrowValue;
    flexItem.style.flexGrow = currentFlexGrowValue + "";
    if (currentFlexGrowValue >= 5){
        flexGrowPlusButton.disabled = true;
        flexGrowPlusButton.style.backgroundColor = 'red';
    }
    if (currentFlexGrowValue > 0){
        flexGrowMinusButton.disabled = false;
        flexGrowMinusButton.style.backgroundColor = 'black';
    }
}

function decreaseFlexGrow(flexItem) {
    currentFlexGrowValue -= 1;
    flexGrowVar.innerText = currentFlexGrowValue;
    flexItem.style.flexGrow = currentFlexGrowValue + "";
    if (currentFlexGrowValue < 1){
        flexGrowMinusButton.disabled = true;
        flexGrowMinusButton.style.backgroundColor = 'red';
    }
    if (currentFlexGrowValue < 5){
        flexGrowPlusButton.disabled = false;
        flexGrowPlusButton.style.backgroundColor = 'black';
    }
}

flexGrowPlusButton.onclick = function(){
    increaseFlexGrow(flexGrowDude);
}

flexGrowMinusButton.onclick = function(){
    decreaseFlexGrow(flexGrowDude);
}

flexShrink20Button.onclick = function(){
    flexShrinkContainer.style.width = '20%';
}

flexShrink40Button.onclick = function(){
    flexShrinkContainer.style.width = '40%';
}

flexShrink60Button.onclick = function(){
    flexShrinkContainer.style.width = '60%';
}

flexShrink80Button.onclick = function(){
    flexShrinkContainer.style.width = '80%';
}

alignSelfFlexStartButton.onclick = function(){
    alignSelfDude.style.alignSelf = 'flex-start';
    codeContainerAlignSelf.children[5].innerHTML = "align-self: <var>flex-start</var>;";
}

alignSelfFlexEndButton.onclick = function(){
    alignSelfDude.style.alignSelf = 'flex-end';
    codeContainerAlignSelf.children[5].innerHTML = "align-self: <var>flex-end</var>;";
}

alignSelfCenterButton.onclick = function(){
    alignSelfDude.style.alignSelf = 'center';
    codeContainerAlignSelf.children[5].innerHTML = "align-self: <var>center</var>;";
}

alignSelfStretchButton.onclick = function(){
    alignSelfDude.style.alignSelf = 'stretch';
    codeContainerAlignSelf.children[5].innerHTML = "align-self: <var>stretch</var>;";
}

alignSelfBaselineButton.onclick = function(){
    alignSelfDude.style.alignSelf = 'baseline';
    codeContainerAlignSelf.children[5].innerHTML = "align-self: <var>baseline</var>;";
}