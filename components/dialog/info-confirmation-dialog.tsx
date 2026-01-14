'use client'

import { Button } from '@/components/ui/button'
import DialogContentOverlayBlur from '@/components/ui/custom/dialog-content-overlay-blur'
import { Noto_Sans_JP } from 'next/font/google'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import { useConfirmDialog } from '@/stores/dialogs/dialogs.selector'
import { updateConfirmDialog } from '@/stores/dialogs/dialogs.slice'
import { useAppDispatch } from '@/stores/store'

const notoSansJP = Noto_Sans_JP({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const InfoConfirmationDialog = () => {
  const dispatch = useAppDispatch()
  const {
    isOpen,
    title,
    description,
    onConfirm: onConfirmCallback,
  } = useConfirmDialog()

  const onConfirm = () => {
    onConfirmCallback()
    dispatch(updateConfirmDialog({ isOpen: false }))
  }

  const onCancel = () => {
    dispatch(updateConfirmDialog({ isOpen: false }))
  }

  const handleOpenChange = (open: boolean) => {
    dispatch(updateConfirmDialog({ isOpen: open }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContentOverlayBlur>
        <DialogTitle className="text-xl font-bold tracking-wide text-m-gold">{title}</DialogTitle>
        <DialogDescription className={cn("text-base text-[#333]", notoSansJP.className)}>{description}</DialogDescription>
        <DialogFooter className='flex flex-col gap-2 sm:flex-row sm:gap-0'>
          <Button className='font-bold bg-m-red text-white hover:bg-m-hover-red transition-all duration-500' onClick={onConfirm}>はい</Button>
          <Button className='font-bold bg-m-gray text-white hover:bg-m-hover-gray transition-all duration-500' onClick={onCancel}>いいえ</Button>
        </DialogFooter>
      </DialogContentOverlayBlur>
    </Dialog>
  )
}

export default InfoConfirmationDialog
