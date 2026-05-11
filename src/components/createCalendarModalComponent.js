export const createCalendarModalComponent = (currentDate = "") => {
    
    // calendar modal
    const calendarModal = document.createElement("div")
    calendarModal.classList.add("modal", "fade")
    calendarModal.id = "calendarModal"
    calendarModal.setAttribute("tabindex", "-1")
    calendarModal.setAttribute("aria-labelledby", "calendarModalLabel")
    calendarModal.setAttribute("aria-hidden", "true")

    //dialog box
    const calendarModalDialog = document.createElement("div")
    calendarModalDialog.classList.add("modal-dialog")
    calendarModal.appendChild(calendarModalDialog)

    //content box
    const calendarModalContent = document.createElement("div")
    calendarModalContent.classList.add("modal-content")
    calendarModalDialog.appendChild(calendarModalContent)

    // header
    const calendarModalContentHeader = document.createElement("div")
    calendarModalContentHeader.classList.add("modal-header")
    calendarModalContent.appendChild(calendarModalContentHeader)

    const calendarModalContentHeaderH1 = document.createElement("h1")
    calendarModalContentHeaderH1.textContent = "set due date"
    calendarModalContentHeaderH1.classList.add("modal-title", "fs-5")
    calendarModalContentHeaderH1.id = "calendarModalLabel"
    calendarModalContentHeader.appendChild(calendarModalContentHeaderH1)

    const closeButton = document.createElement("button")
    closeButton.type = "button"
    closeButton.classList.add("btn-close")
    closeButton.dataset.bsDismiss = "modal"
    closeButton.ariaLabel = "close"
    calendarModalContentHeader.appendChild(closeButton)

    //body
    const calendarModalBody = document.createElement("div")
    calendarModalBody.classList.add("modal-body")
    calendarModalContent.appendChild(calendarModalBody)

    const selectDateLabel = document.createElement("label")
    selectDateLabel.for = "dateInput"
    selectDateLabel.classList.add("form-label")
    calendarModalBody.appendChild(selectDateLabel)

    const selectDateInput = document.createElement("input")
    selectDateInput.classList.add("form-control")
    selectDateInput.type = "date"
    selectDateInput.id = "dateInput"
    selectDateInput.value = currentDate
    calendarModalBody.appendChild(selectDateInput)

    //footer
    const calendarModalFooter = document.createElement("div")
    calendarModalFooter.classList.add("modal-footer")
    calendarModalContent.appendChild(calendarModalFooter)

    const cancelButton = document.createElement("button")
    cancelButton.classList.add("btn", "btn-secondary")
    cancelButton.dataset.bsDismiss = "modal"
    cancelButton.type = "button"
    cancelButton.textContent = "close"
    calendarModalFooter.appendChild(cancelButton)

    const saveDateButton = document.createElement("button")
    saveDateButton.classList.add("btn", "btn-primary")
    saveDateButton.id = "saveDateButton"
    saveDateButton.type = "button"
    saveDateButton.textContent = "save date"
    calendarModalFooter.appendChild(saveDateButton)

    return calendarModal
}

//