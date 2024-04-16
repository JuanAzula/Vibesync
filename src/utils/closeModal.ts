export const closeModal = (onOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  onOpen(false);
}

export const closeModalWhenClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, onOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const modal = document.querySelector('.modal-container');

  if (modal && !modal.contains(event.target as Node)) {
    onOpen(false);
  }
};