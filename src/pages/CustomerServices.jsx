import { Box, Divider, Icon, Typography } from '@mui/material'
import React from 'react'
import SearchBar from '../components/SearchBar'
import ServicesButton from '../components/ServicesButton';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import RedeemIcon from '@mui/icons-material/Redeem';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function CustomerServices() {

    return (
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '0.5rem', p: 5 }}>
            <Typography variant='h4' style={{ marginBottom: '2rem' }}>Hangi konuda desteğe ihtiyacınız var?</Typography>

            <SearchBar placeholder="Destek almak istediğiniz konu nedir?" />

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <ServicesButton icon={LocalShippingIcon} text='Teslimat ve Kargo' />
                <ServicesButton icon={CancelIcon} text='İptal Talebi' />
                <ServicesButton icon={RedeemIcon} text='İade Talebi' />
                <ServicesButton icon={HelpOutlineIcon} text='Diğer Talepler' />

            </Box>
            <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '0.5rem', p: 5, backgroundColor: '#f0f0f0', margin: '2rem' }}>
                <Typography variant='h6' marginBottom='1rem'>Duyurular</Typography>
                <Typography variant='p'>Gerçekleştirdiğiniz işlemlerde bilgi güvenliğiniz bizim için önemlidir. Bu nedenle size özel ve şifreli bir hizmettir.</Typography>
                <Divider sx={{ backgroundColor: '#000', marginTop: '0.5rem', marginBottom: '1rem' }} />
                <Typography variant='p'>Güvenliğiniz için  ile ilgili tüm soru ve taleplerinizde Ayarlar - Müşteri Hizmetlerimizden destek alabilirsiniz.</Typography>
            </Box>
        </Box>

    )
}

export default CustomerServices