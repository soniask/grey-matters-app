export const learningConstants = {
    CHANGE_TOP_IMAGE: 'CHANGE_TOP_IMAGE',
    CHANGE_BASE_IMAGE: 'CHANGE_BASE_IMAGE',
}

export const learningActions = {
    updateTopImage,
    updateBaseImage,
}

function updateTopImage(imageIndex) {
    return {type: learningConstants.CHANGE_TOP_IMAGE, imageIndex}
}

function updateBaseImage(imageIndex) {
    return {type: learningConstants.CHANGE_BASE_IMAGE, imageIndex}
}
