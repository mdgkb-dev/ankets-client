<template>
  <div>Profile</div>
  <!-- <div v-if="mounted" class="size" data-test="profile-info-component">
    <div class="title">
      <h2><b>Мой профиль</b></h2>
      <button class="edit-button" @click="$router.push('/profile/edit')">
        <svg class="icon-edit">
          <use xlink:href="#profile-edit"></use>
        </svg>
        <div class="button-name">Редактировать</div>
      </button>
    </div>
    <div class="right-block">
      <div class="column-left">
        <div class="user-avatar">
          <div class="avatar-block">
            <UploaderSingleScan
              :emit-crop="true"
              :file-info="user.human.photo"
              :height="273"
              :default-ratio="1"
              @crop="saveAvatar"
              @ratio="(e) => (element.ratio = e)"
            />
          </div>
        </div>
        <el-form :model="user">
          <div class="user-name">
            <div label="Имя">
              <h2>
                <b data-test="full-name-mobile">{{ user.human.getFullName() }}</b>
              </h2>
            </div>
          </div>
          <div class="user-info">
            <div class="contact-mail">
              <svg class="icon-email">
                <use xlink:href="#profile-email"></use>
              </svg>
              <div prop="email" label="Email">
                <h4>{{ user.email }}</h4>
              </div>
            </div>
            <div class="contact-phone">
              <div class="contact-phone-el">
                <svg class="icon-phone">
                  <use xlink:href="#profile-phone"></use>
                </svg>
                <div prop="phone" label="Phone">
                  <h4 v-if="user.phone">{{ user.phone }}</h4>
                  <h4 v-else>Не указан</h4>
                </div>
              </div>
              <div class="contact-phone-el">
                <button v-if="user.phone" type="button" class="edit-phone" @click="isEditPhoneModalOpen = true">Изменить</button>
                <button v-else type="button" class="add-phone" @click="isEditPhoneModalOpen = true">Добавить номер</button>
                <EditPhone v-if="isEditPhoneModalOpen" @close="isEditPhoneModalOpen = false" />
              </div>
            </div>
          </div>
        </el-form>
      </div>
      <div class="column-right">
        <el-form :model="user">
          <div class="parent-info">
            <h2>Личная информация</h2>
            <ul class="parent-info-list">
              <li class="list-item">
                <div class="list-item">
                  <div class="item-title"><h5>ДАТА РОЖДЕНИЯ</h5></div>
                  <div class="item-data">
                    <h4>{{ $dateTimeFormatter.format(user.human.dateBirth, { month: 'long' }) }}</h4>
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="list-item">
                  <div class="item-title"><h5>ПОЛ</h5></div>
                  <div class="item-data">
                    <h4>{{ user.human.isMale ? 'Мужской' : 'Женский' }}</h4>
                  </div>
                </div>
              </li>
              <li v-if="user.human.placeBirth" class="list-item">
                <div class="list-item">
                  <div class="item-title"><h5>МЕСТО&nbsp;РОЖДЕНИЯ</h5></div>
                  <div class="item-data">
                    <h4>{{ user.human.placeBirth }}</h4>
                  </div>
                </div>
              </li>
              <li v-if="user.human.citizenship" class="list-item">
                <div class="list-item">
                  <div class="item-title"><h5>ГРАЖДАНСТВО</h5></div>
                  <div class="item-data">
                    <h4>{{ user.human.citizenship }}</h4>
                  </div>
                </div>
              </li>
              <li v-if="user.human.snils" class="list-item">
                <div class="list-item">
                  <div class="item-title"><h5>СНИЛС</h5></div>
                  <div class="item-data">
                    <h4>{{ user.human.snils }}</h4>
                  </div>
                </div>
              </li>
              <li v-if="user.human.address" class="list-item">
                <div class="list-item">
                  <div class="item-title"><h5>АДРЕС</h5></div>
                  <div class="item-data">
                    <h4>{{ user.human.address }}</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-form>
      </div>
    </div>

    <svg width="0" height="0" class="hidden">
      <symbol id="profile-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M12.5 22.8772H24H12.5ZM18.25 1.79391C18.7583 1.28558 19.4478 1 20.1667 1C20.5226 1 20.8751 1.07011 21.204 1.20633C21.5328 1.34255 21.8316 1.54221 22.0833 1.79391C22.335 2.04561 22.5347 2.34442 22.6709 2.67328C22.8071 3.00215 22.8772 3.35462 22.8772 3.71058C22.8772 4.06653 22.8071 4.41901 22.6709 4.74787C22.5347 5.07673 22.335 5.37554 22.0833 5.62724L6.11111 21.5995L1 22.8772L2.27778 17.7661L18.25 1.79391Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </symbol>
      <symbol id="avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130">
        <path
          d="M108.668 101.278C114.502 94.2585 118.56 85.937 120.498 77.0175C122.436 68.098 122.197 58.843 119.802 50.0353C117.407 41.2277 112.925 33.1264 106.737 26.417C100.548 19.7076 92.835 14.5873 84.2492 11.4894C75.6634 8.39145 66.4578 7.40696 57.4111 8.61921C48.3644 9.83146 39.7427 13.2048 32.2754 18.4538C24.8081 23.7028 18.7149 30.6732 14.5112 38.7751C10.3075 46.8771 8.11703 55.8723 8.12502 64.9999C8.12809 78.2688 12.804 91.1127 21.3322 101.278L21.251 101.347C21.5353 101.688 21.8603 101.981 22.1528 102.318C22.5185 102.736 22.9125 103.131 23.2903 103.537C24.4278 104.772 25.5978 105.958 26.8247 107.071C27.1985 107.412 27.5844 107.729 27.9622 108.054C29.2622 109.176 30.5988 110.24 31.9841 111.231C32.1628 111.353 32.3253 111.511 32.5041 111.637V111.589C42.0189 118.284 53.3695 121.878 65.0041 121.878C76.6387 121.878 87.9893 118.284 97.5041 111.589V111.637C97.6828 111.511 97.8413 111.353 98.0241 111.231C99.4053 110.236 100.746 109.176 102.046 108.054C102.424 107.729 102.81 107.408 103.183 107.071C104.41 105.954 105.58 104.772 106.718 103.537C107.096 103.131 107.486 102.736 107.855 102.318C108.144 101.981 108.473 101.688 108.757 101.343L108.668 101.278ZM65 32.4999C68.6157 32.4999 72.1502 33.5721 75.1565 35.5808C78.1629 37.5896 80.506 40.4447 81.8897 43.7852C83.2734 47.1257 83.6354 50.8014 82.93 54.3476C82.2246 57.8939 80.4835 61.1513 77.9268 63.7079C75.3701 66.2646 72.1127 68.0057 68.5665 68.7111C65.0203 69.4165 61.3446 69.0545 58.0041 67.6708C54.6636 66.2871 51.8085 63.944 49.7997 60.9377C47.7909 57.9313 46.7188 54.3968 46.7188 50.7811C46.7188 45.9327 48.6448 41.2827 52.0732 37.8543C55.5016 34.4259 60.1515 32.4999 65 32.4999V32.4999ZM32.5285 101.278C32.5989 95.9438 34.7667 90.8518 38.5627 87.1037C42.3588 83.3555 47.4779 81.2526 52.8125 81.2499H77.1875C82.5222 81.2526 87.6413 83.3555 91.4373 87.1037C95.2334 90.8518 97.4011 95.9438 97.4716 101.278C88.5619 109.307 76.9936 113.75 65 113.75C53.0065 113.75 41.4382 109.307 32.5285 101.278V101.278Z"
        ></path>
      </symbol>
      <symbol id="profile-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V5.913C2.02243 5.39779 2.24301 4.91116 2.61568 4.5547C2.98835 4.19824 3.4843 3.99951 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z"
        ></path>
      </symbol>
      <symbol id="profile-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M19.4998 21.75H19.3723C4.63482 20.9025 2.54232 8.4675 2.24982 4.6725C2.22625 4.37744 2.26114 4.08062 2.35248 3.79906C2.44382 3.5175 2.58981 3.25673 2.78211 3.03169C2.9744 2.80665 3.20921 2.62177 3.47308 2.48763C3.73695 2.35349 4.02469 2.27274 4.31982 2.25H8.45232C8.75274 2.24971 9.04632 2.33963 9.29504 2.50812C9.54377 2.67661 9.73617 2.9159 9.84732 3.195L10.9873 6C11.0971 6.27266 11.1243 6.57156 11.0657 6.85957C11.007 7.14758 10.865 7.412 10.6573 7.62L9.05982 9.2325C9.30936 10.6506 9.98846 11.9578 11.0052 12.9772C12.022 13.9967 13.3274 14.6792 14.7448 14.9325L16.3723 13.32C16.5834 13.1146 16.8504 12.9759 17.1398 12.9213C17.4292 12.8666 17.7283 12.8983 17.9998 13.0125L20.8273 14.145C21.1022 14.2597 21.3367 14.4536 21.501 14.702C21.6653 14.9504 21.7519 15.2422 21.7498 15.54V19.5C21.7498 20.0967 21.5128 20.669 21.0908 21.091C20.6689 21.5129 20.0966 21.75 19.4998 21.75ZM4.49982 3.75C4.30091 3.75 4.11014 3.82902 3.96949 3.96967C3.82884 4.11032 3.74982 4.30109 3.74982 4.5V4.56C4.09482 9 6.30732 19.5 19.4548 20.25C19.5534 20.2561 19.6521 20.2427 19.7454 20.2105C19.8388 20.1783 19.9248 20.1281 19.9987 20.0626C20.0726 19.9971 20.1328 19.9176 20.1759 19.8288C20.219 19.74 20.2441 19.6436 20.2498 19.545V15.54L17.4223 14.4075L15.2698 16.545L14.9098 16.5C8.38482 15.6825 7.49982 9.1575 7.49982 9.09L7.45482 8.73L9.58482 6.5775L8.45982 3.75H4.49982Z"
        ></path>
      </symbol>

      <symbol id="home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V11C21.0008 10.8684 20.9755 10.7379 20.9258 10.6161C20.876 10.4943 20.8027 10.3834 20.71 10.29L12.71 2.29C12.5226 2.10375 12.2692 1.99921 12.005 1.99921C11.7408 1.99921 11.4874 2.10375 11.3 2.29L3.3 10.29C3.20551 10.3826 3.13034 10.4931 3.07885 10.6149C3.02735 10.7368 3.00055 10.8677 3 11V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22ZM10 20V15H14V20H10ZM5 11.41L12 4.41L19 11.41V20H16V15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H10C9.46957 13 8.96086 13.2107 8.58579 13.5858C8.21071 13.9609 8 14.4696 8 15V20H5V11.41Z"
        ></path>
      </symbol>

      <symbol id="education" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M7 18H17V16H7V18ZM17 14H7V12H17V14ZM7 10H11V8H7V10Z"></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 2C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H18C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7956 21 19V9C21 7.14348 20.2625 5.36301 18.9497 4.05025C17.637 2.7375 15.8565 2 14 2H6ZM6 4H13V9H19V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4V4ZM15 4.1C15.786 4.26102 16.5218 4.60849 17.1455 5.11315C17.7692 5.61782 18.2625 6.26492 18.584 7H15V4.1Z"
        ></path>
      </symbol>

      <symbol id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z"></path>
      </symbol>
    </svg>
  </div> -->
</template>

<script lang="ts" setup>
import User from '@/classes/User';
import PInput from '@/services/components/PInput.vue';
import PButton from '@/services/components/PButton.vue';
import PSelect from '@/services/components/PSelect.vue';
import IconJob from '@/components/Icons/IconJob.vue';
import IconDepartment from '@/components/Icons/IconDepartment.vue';

const user: Ref<User> = ref(User.Create());

</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.help-string {
  display: flex;
  justify-content: right;
  align-items: center;
  color: #5F6A99;
  font-size: 16px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  opacity: 0.4;
  cursor: pointer;
  width: 124px;
}

.help-string:hover {
  color: #5F6A99;
  font-size: 16px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  opacity: 1;
}

.base-button {
  box-sizing: border-box;
  width: 100%;
  max-width: 560px;
  height: 52px;
  border: none;
  border-radius: 5px;
  background: #5E6CE7;
  color: #ffffff;
  font-size: 17px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  cursor: pointer;
  margin: 30px 0 0 0;
}

.base-button:hover {
  background: lighten($color: #5E6CE7, $amount: 3%);
}
</style>
