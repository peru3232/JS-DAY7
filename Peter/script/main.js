function Btn(x) {
    switch(x) {
        case 1:
            Swal.fire({
                title: 'The answer, my friend...',
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
            })
            break;
        case 2:
            Swal.fire({
                title: 'is blowing in the wind -',
                showClass: {
                popup: 'animate__animated animate__fadeInUp'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutDown'
                }
            })
            break;
        case 3:
            Swal.fire({
                title: 'The answer is blowing in the wind',
                showClass: {
                popup: 'animate__animated animate__zoomIn'
                },
                hideClass: {
                popup: 'animate__animated animate__zoomOut'
                }
            })
            break;
    }
}