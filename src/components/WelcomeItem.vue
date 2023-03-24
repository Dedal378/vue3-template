<template>
  <div class="item">
    <i>
      <slot name="icon" />
    </i>

    <div class="details">
      <h3>
        <slot name="heading" />
      </h3>

      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  margin-top: 2rem;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  width: 32px;
  height: 32px;
  color: var(--color-text);
  place-items: center;

  place-content: center;
}

h3 {
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  font-size: 1.2rem;
  font-weight: 500;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    position: absolute;
    top: calc(50% - 25px);
    left: -26px;
    width: 50px;
    height: 50px;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 8px;
  }

  .item:before {
    content: ' ';
    position: absolute;
    bottom: calc(50% + 25px);
    left: 0;
    height: calc(50% - 25px);
    border-left: 1px solid var(--color-border);
  }

  .item:after {
    content: ' ';
    position: absolute;
    top: calc(50% + 25px);
    left: 0;
    height: calc(50% - 25px);
    border-left: 1px solid var(--color-border);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
