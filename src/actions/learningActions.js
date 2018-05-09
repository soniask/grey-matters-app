export const learningConstants = {
    CHANGE_IMAGE: 'CHANGE_IMAGE',
}

export const learningActions = {
    changeImage,
}

function changeImage(imageIndex) {
    return {type: learningConstants.CHANGE_IMAGE, imageIndex}
}