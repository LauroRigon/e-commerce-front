<template>
    <nav :class="['sidebar', { condensed: !open }]">
        <div class="logo_content">
            <div class="logo">
                <i class="fas fa-search"></i>
                <div class="logo_name">OpaSeu!</div>
            </div>
            <i class='fas fa-bars' id="toggle-menu-btn" @click="toggleMenu"></i>
        </div>

        <ul>
            <li class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search...">
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-box-open"></i>
                    <span class="links_name">Produtos</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-user"></i>
                    <span class="links_name">User</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-comments"></i>
                    <span class="links_name">Chat</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-chart-bar"></i>
                    <span class="links_name">Analytics</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-cogs"></i>
                    <span class="links_name">Settings</span>
                </a>
            </li>
        </ul>

        <div class="profile_content">
            <div class="profile">
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="avatar">
                <div class="profile_details">
                    <div class="name">Fulano de tal</div>
                    <div class="role">Administrador</div>
                </div>
                <i class="fas fa-sign-out-alt logout"></i>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "SideMenu",
    data() {
        return {
            open: true,
        }
    },
    methods: {
        openMenu() {
            this.open = true
        },
        closeMenu() {
            this.open = false
        },
        toggleMenu() {
            this.open ? this.closeMenu() : this.openMenu()
        },
    },
}
</script>

<style scoped lang="scss">
@import "src/style/style";
$primary-light: lighten($primary, 35);

.sidebar {
    top: 0;
    left: 0;
    height: 100vh;
    width: 240px;
    background-color: $primary;
    padding-top: 6px;
    display: flex;
    flex-direction: column;
    transition: width .2s ease;

    &.condensed {
        width: 50px;

        .logo_content {
            margin-top: 10px;
            justify-content: center;

            .logo {
                display: none !important;
            }
        }

        .links_name, .profile_details, .logout {
            display: none;
        }

        .profile {
            padding-left: 2px !important;
        }
    }

    .logo_content {
        position: relative;
        display: flex;
        align-items: center;

        #toggle-menu-btn {
            color: #fff;
            margin-right: 10px;
            margin-left: 10px;
            font-size: 25px;
        }

        .logo {
            color: #fff;
            display: flex;
            height: 50px;
            width: 100%;
            align-items: center;
            font-size: 28px;
            margin-right: 5px;

            .logo_name {
                font-size: 20px;
                font-weight: 400;
            }
        }
    }

    ul {
        flex-grow: 1;
        max-height: 100%;
        padding-left: 0;
        margin-top: 20px;

        .search-box {
            position: relative;

            i {
                position: absolute;
                top: 50%;
                left: 15px;
                transform: translateY(-50%);
                color: $primary;
            }

            input {
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                background-color: $primary-light;
                padding-left: 50px;
            }
        }

        li {
            height: 50px;
            width: 100%;
            line-height: 50px;
            list-style: none;

            a {
                position: relative;
                color: #fff;
                display: flex;
                align-items: center;
                text-decoration: none;

                i {
                    height: 50px;
                    min-width: 50px;
                    line-height: 50px;
                    text-align: center;
                    z-index: 2;

                }

                &:hover {
                    background-color: $body-bg;
                    color: $primary;
                }
                &:hover::before {
                    position: absolute;
                    content: '';
                    top: 0;
                    right: 0;
                    transform: translateY(-50px);
                    transform-origin: center;
                    background: transparent;
                    pointer-events: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    box-shadow: 35px 35px 0 10px $body-bg;
                    border-color: transparent;
                    z-index: 1;
                }
                &:hover::after {
                    position: absolute;
                    content: '';
                    bottom: 0;
                    right: 0;
                    transform: translateY(50px);
                    transform-origin: center;
                    background: transparent;
                    pointer-events: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    box-shadow: 35px -35px 0 10px $body-bg;
                    border-color: transparent;
                    z-index: 1;
                }
            }
        }
    }

    .profile_content {
        flex: 0 0 auto;
        color: #fff;

        .profile {
            display: flex;
            align-items: center;
            max-width: 100%;
            padding: 5px 0 5px 10px;
            background-color: $primary-light;

            img {
                height: 45px;
                width: 45px;
                border-radius: 12px;
                object-fit: cover;
            }

            .profile_details {
                flex: 1 0 auto;
                margin-left: 10px;
            }

            .logout {
                font-size: 20px;
                background: darken($primary, 7);
                margin-right: 10px;
                width: 40px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                border-radius: 20px;
                cursor: pointer;
                &:hover {
                    box-shadow: 0 0 2px 0 #0000005c;
                }
            }
        }

    }
}
</style>